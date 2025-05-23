import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaFieldComponent } from './textarea-field.component';

describe('TextAreaFieldComponent', () => {
  let component: TextAreaFieldComponent;
  let fixture: ComponentFixture<TextAreaFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
