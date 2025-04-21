import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoBannerComponent } from './info-banner.component';

describe('InfoBannerComponent', () => {
  let component: InfoBannerComponent;
  let fixture: ComponentFixture<InfoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBannerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the info banner component', () => {
    expect(component).toBeTruthy();
  });

  it('should set default type to info', () => {
    expect(component.type).toBe('info');
    expect(component.icon).toBe('ℹ️');
  });

  it('should return correct class for success type', () => {
    component.type = 'success';
    expect(component.bannerClasses).toContain('bg-green-50');
  });
});
