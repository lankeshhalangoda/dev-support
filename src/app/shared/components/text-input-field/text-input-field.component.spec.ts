import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextInputFieldComponent } from './text-input-field.component';

describe('TextInputFieldComponent', () => {
  let component: TextInputFieldComponent;
  let fixture: ComponentFixture<TextInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputFieldComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TextInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the text input field component', () => {
    expect(component).toBeTruthy();
  });

  it('should bind input value', () => {
    component.inputValue = 'Hello';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('Hello');
  });
});
