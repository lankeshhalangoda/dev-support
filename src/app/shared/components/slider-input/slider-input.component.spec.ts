import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderInputComponent } from './slider-input.component';

describe('SliderInputComponent', () => {
  let component: SliderInputComponent;
  let fixture: ComponentFixture<SliderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the slider component', () => {
    expect(component).toBeTruthy();
  });

  it('should update slider value', () => {
    component.sliderValue = 80;
    fixture.detectChanges();
    expect(component.sliderValue).toBe(80);
  });
});
