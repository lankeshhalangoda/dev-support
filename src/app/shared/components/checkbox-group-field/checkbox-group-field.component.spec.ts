import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxGroupFieldComponent } from './checkbox-group-field.component';
import { By } from '@angular/platform-browser';

describe('CheckboxGroupFieldComponent', () => {
  let component: CheckboxGroupFieldComponent;
  let fixture: ComponentFixture<CheckboxGroupFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxGroupFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxGroupFieldComponent);
    component = fixture.componentInstance;

    // Set default inputs
    component.labelText = 'Test Checkbox Group';
    component.options = [
      { id: 'done', text: 'Done' },
      { id: 'good', text: 'Good' },
      { id: 'not_good', text: 'Not Good' },
      { id: 'clean', text: 'Clean' }
    ];
    component.selectedValues = [];

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all checkbox options', () => {
    const labels = fixture.debugElement.queryAll(By.css('label'));
    expect(labels.length).toBe(4); // 4 checkboxes
  });

  it('should emit selected values on click', () => {
    spyOn(component.selectedValuesChange, 'emit');

    const optionToClick = fixture.debugElement.queryAll(By.css('label'))[0];
    optionToClick.nativeElement.click();

    expect(component.selectedValuesChange.emit).toHaveBeenCalledWith(['done']);
  });

  it('should toggle selection on second click (deselect)', () => {
    const option = component.options[0];

    // Select
    component.toggleValue(option.id);
    expect(component.selectedValues).toContain(option.id);

    // Deselect
    component.toggleValue(option.id);
    expect(component.selectedValues).not.toContain(option.id);
  });
});
