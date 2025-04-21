import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagInputComponent } from './tag-input.component';

describe('TagInputComponent', () => {
  let component: TagInputComponent;
  let fixture: ComponentFixture<TagInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TagInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the tag input component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a tag', () => {
    component.inputValue = 'Angular';
    component.addTag();
    expect(component.tags).toContain('Angular');
  });

  it('should remove a tag', () => {
    component.tags = ['Angular', 'Tailwind'];
    component.removeTag(0);
    expect(component.tags).not.toContain('Angular');
  });
});
