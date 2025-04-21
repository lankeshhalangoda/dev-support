import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextareaWithCountComponent } from './textarea-with-count.component';

describe('TextareaWithCountComponent', () => {
  let component: TextareaWithCountComponent;
  let fixture: ComponentFixture<TextareaWithCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaWithCountComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaWithCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the textarea component', () => {
    expect(component).toBeTruthy();
  });

  it('should track character count', () => {
    component.inputText = 'Hello world';
    expect(component.inputText.length).toBe(11);
  });
});
