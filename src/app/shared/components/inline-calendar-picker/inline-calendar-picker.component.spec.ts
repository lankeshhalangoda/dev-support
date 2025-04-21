import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineCalendarPickerComponent } from './inline-calendar-picker.component';

describe('InlineCalendarPickerComponent', () => {
  let component: InlineCalendarPickerComponent;
  let fixture: ComponentFixture<InlineCalendarPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineCalendarPickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InlineCalendarPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the calendar component', () => {
    expect(component).toBeTruthy();
  });

  it('should go to previous and next months', () => {
    const initialMonth = component.currentMonth;
    component.nextMonth();
    expect(component.currentMonth).not.toBe(initialMonth);
    component.prevMonth();
    expect(component.currentMonth).toBe(initialMonth);
  });

  it('should select a date', () => {
    const date = new Date(component.currentYear, component.currentMonth, 10);
    component.selectDate(date);
    expect(component.selectedDate).toEqual(date);
  });
});
