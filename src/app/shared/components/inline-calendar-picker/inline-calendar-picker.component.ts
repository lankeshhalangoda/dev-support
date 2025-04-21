import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inline-calendar-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inline-calendar-picker.component.html',
  styleUrls: ['./inline-calendar-picker.component.scss']
})
export class InlineCalendarPickerComponent {
  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  selectedDate: Date | null = null;

  get monthDays(): (Date | null)[] {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);

    const days: (Date | null)[] = [];

    // Add padding for the first week
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    // Add days of the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(this.currentYear, this.currentMonth, i));
    }

    return days;
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }

  selectDate(date: Date | null) {
    if (date) this.selectedDate = date;
  }

  isToday(date: Date | null): boolean {
    return !!(date && date.toDateString() === new Date().toDateString());
  }
  
  isSelected(date: Date | null): boolean {
    return !!(date && this.selectedDate?.toDateString() === date.toDateString());
  }
  

  get monthLabel(): string {
    return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {
      month: 'long',
      year: 'numeric'
    });
  }
}
