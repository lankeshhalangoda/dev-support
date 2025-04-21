import {Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {NgForOf} from '@angular/common';
import {environment} from '../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {WorkflowService} from '../../services/workflow/workflow.service';
import {IncidentService} from '../../services/incident/incident.service';
import {MediaUploadService} from '../../services/media-upload/media-upload.service';
import {AlertService} from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-otp-field',
  imports: [
    NgForOf
  ],
  templateUrl: './otp-field.component.html',
  styleUrl: './otp-field.component.scss'
})
export class OtpFieldComponent {
  @Input() digitCount: number = 6;
  @Output() passStatusOfOTPVerify = new EventEmitter<void>();

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef<HTMLInputElement>>;
  otpArray: number[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _workflowService: WorkflowService, private _incidentService: IncidentService,
    private _mediaUploadService: MediaUploadService,
    private _alertService: AlertService
  ) {
    // this._activatedRoute.queryParams.subscribe((params) => {
    //   // this._workflowId = params['workflowId'];
    //   this._workflowId = '67d1896b8a6ad01cbd668ac9';
    // });


  }

  ngAfterViewInit() {
    this.otpArray = Array(this.digitCount).fill(0);
  }

  handleResend() {
    // this.resendOTP.emit();
    this.clearInputs();
    this.passStatusOfOTPVerify.emit();
  }


  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    let value = input.value;
  
    if (value.length > 1) {
      value = value.charAt(value.length - 1); // Keep only the last digit
      input.value = value;
    }
  
    if (/^\d$/.test(value)) {
      // Apply inline Tailwind classes manually
      input.classList.add('bg-blue-500', 'text-white', 'border-blue-500');
    } else {
      input.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
    }
  
    if (value && index < this.digitCount - 1) {
      this.otpInputs.toArray()[index + 1].nativeElement.focus(); // Focus next input
    }
  
    this.updateOTPValue();
  }
  

  onKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !input.value && index > 0) {
      this.otpInputs.toArray()[index - 1].nativeElement.focus(); // Go back
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      this.otpInputs.toArray()[index - 1].nativeElement.focus();
    }

    if (event.key === 'ArrowRight' && index < this.digitCount - 1) {
      this.otpInputs.toArray()[index + 1].nativeElement.focus();
    }
  }

  updateOTPValue() {
    const otp = this.otpInputs.toArray().map(input => input.nativeElement.value).join('');
    console.log('OTP Entered:', otp); // You can emit this if needed
  }

  clearInputs() {
    this.otpInputs.forEach(input => {
      input.nativeElement.value = '';
      input.nativeElement.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
    });
    this.otpInputs.first.nativeElement.focus();
  }
  

}
