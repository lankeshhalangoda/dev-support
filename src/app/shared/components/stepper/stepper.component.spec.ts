import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the stepper', () => {
    expect(component).toBeTruthy();
  });

  it('should go to next step', () => {
    component.nextStep();
    expect(component.currentStep).toBe(1);
  });

  it('should not exceed max steps', () => {
    component.currentStep = 2;
    component.nextStep();
    expect(component.currentStep).toBe(2);
  });

  it('should go to previous step', () => {
    component.currentStep = 2;
    component.prevStep();
    expect(component.currentStep).toBe(1);
  });
});
