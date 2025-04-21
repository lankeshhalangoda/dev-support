import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordToggleFieldComponent } from './password-toggle-field.component';

describe('PasswordToggleFieldComponent', () => {
  let component: PasswordToggleFieldComponent;
  let fixture: ComponentFixture<PasswordToggleFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordToggleFieldComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordToggleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle visibility', () => {
    expect(component.showPassword).toBeFalse();
    component.toggleVisibility();
    expect(component.showPassword).toBeTrue();
  });
});
