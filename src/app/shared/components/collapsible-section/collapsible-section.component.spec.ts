import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleSectionComponent } from './collapsible-section.component';

describe('CollapsibleSectionComponent', () => {
  let component: CollapsibleSectionComponent;
  let fixture: ComponentFixture<CollapsibleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapsibleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the collapsible section component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle open and closed state', () => {
    expect(component.isExpanded).toBeFalse();
    component.toggle();
    expect(component.isExpanded).toBeTrue();
  });
});
