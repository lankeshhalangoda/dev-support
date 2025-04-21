import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterContentInit {
  @Input() steps: { title: string; description: string }[] = [];
  @Input() activeStep: number = 0;
  @Output() activeStepChange = new EventEmitter<number>();
  @Output() submit = new EventEmitter<void>();  // 🔹 Add this

  math = Math;

  @ContentChildren('stepContent') templates!: QueryList<TemplateRef<any>>;
  stepTemplates: TemplateRef<any>[] = [];

  ngAfterContentInit() {
    this.stepTemplates = this.templates.toArray();
  }

  next() {
    if (this.activeStep < this.steps.length - 1) {
      this.activeStep++;
      this.activeStepChange.emit(this.activeStep);
    }
  }

  previous() {
    if (this.activeStep > 0) {
      this.activeStep--;
      this.activeStepChange.emit(this.activeStep);
    }
  }

  goTo(index: number) {
    this.activeStep = index;
    this.activeStepChange.emit(this.activeStep);
  }

  submitForm(): void {
    this.submit.emit();  // 🔹 Trigger the parent
  }
}

