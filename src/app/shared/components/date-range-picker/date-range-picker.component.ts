import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent {
  fromDate: string = '';
  toDate: string = '';
  isInvalidRange: boolean = false;

  validateDates() {
    if (this.fromDate && this.toDate) {
      this.isInvalidRange = new Date(this.fromDate) > new Date(this.toDate);
    } else {
      this.isInvalidRange = false;
    }
  }
  
}
