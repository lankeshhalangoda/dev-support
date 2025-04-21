import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxFieldComponent } from './checkbox-field.component';

describe('CheckboxFieldComponent', () => {
  let component: CheckboxFieldComponent;
  let fixture: ComponentFixture<CheckboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxFieldComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on toggle', () => {
    spyOn(component.isCheckedChange, 'emit');
    component.onToggle();
    expect(component.isCheckedChange.emit).toHaveBeenCalledWith(component.isChecked);
  });

  it('should toggle checkbox state', () => {
    const initialValue = component.isChecked;
    component.onToggle();
    expect(component.isChecked).toBe(!initialValue);
  });
});
