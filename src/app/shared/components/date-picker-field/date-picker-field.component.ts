import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-picker-field.component.html',
  styleUrls: ['./date-picker-field.component.scss']
})
export class DatePickerFieldComponent {
  @Input() selectedDate: string = '';
  @Output() selectedDateChange = new EventEmitter<string>();

  onDateChange(value: string) {
    this.selectedDate = value;
    this.selectedDateChange.emit(value);
  }
}
