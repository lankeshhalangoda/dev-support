import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';
import { By } from '@angular/platform-browser';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sections', () => {
    const headers = fixture.debugElement.queryAll(By.css('button'));
    headers[0].nativeElement.click();
    fixture.detectChanges();
    expect(component.expandedIndex).toBe(0);
  });

  it('should collapse when same header is clicked', () => {
    const headers = fixture.debugElement.queryAll(By.css('button'));
    headers[0].nativeElement.click();
    fixture.detectChanges();
    headers[0].nativeElement.click();
    fixture.detectChanges();
    expect(component.expandedIndex).toBeNull();
  });
});
