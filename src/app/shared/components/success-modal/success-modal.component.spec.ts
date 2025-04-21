import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessModalComponent } from './success-modal.component';
import { By } from '@angular/platform-browser';

describe('SuccessModalComponent', () => {
  let component: SuccessModalComponent;
  let fixture: ComponentFixture<SuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event on OK button click', () => {
    spyOn(component.close, 'emit');

    const okButton = fixture.debugElement.query(By.css('button'));
    okButton.triggerEventHandler('click', null);

    expect(component.close.emit).toHaveBeenCalled();
  });
});
