import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-picker-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './time-picker-field.component.html',
  styleUrls: ['./time-picker-field.component.scss']
})
export class TimePickerFieldComponent {
  @Input() selectedTime: string = '';
  @Output() selectedTimeChange = new EventEmitter<string>();

  onTimeChange(value: string) {
    this.selectedTime = value;
    this.selectedTimeChange.emit(value);
  }
}
