import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSelectSearchableDropdownComponent } from './multi-select-searchable-dropdown.component';

describe('MultiSelectSearchableDropdownComponent', () => {
  let component: MultiSelectSearchableDropdownComponent;
  let fixture: ComponentFixture<MultiSelectSearchableDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectSearchableDropdownComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectSearchableDropdownComponent);
    component = fixture.componentInstance;
    component.options = [
      { id: '1', text: 'One' },
      { id: '2', text: 'Two' }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle selection', () => {
    component.toggleSelection('1');
    expect(component.selectedValues).toContain('1');
    component.toggleSelection('1');
    expect(component.selectedValues).not.toContain('1');
  });

  it('should clear all selections', () => {
    component.selectedValues = ['1', '2'];
    component.clearAll();
    expect(component.selectedValues.length).toBe(0);
  });

  it('should return correct label', () => {
    expect(component.getOptionLabel('1')).toBe('One');
  });
});
