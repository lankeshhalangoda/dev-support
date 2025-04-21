import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerFieldComponent } from './time-picker-field.component';

describe('TimePickerFieldComponent', () => {
  let component: TimePickerFieldComponent;
  let fixture: ComponentFixture<TimePickerFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimePickerFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
