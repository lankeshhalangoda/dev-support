import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePreviewerComponent } from './image-previewer.component';

describe('ImagePreviewerComponent', () => {
  let component: ImagePreviewerComponent;
  let fixture: ComponentFixture<ImagePreviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePreviewerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagePreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the image previewer component', () => {
    expect(component).toBeTruthy();
  });

  it('should reset image on remove', () => {
    component.imageSrc = 'test';
    component.removeImage();
    expect(component.imageSrc).toBeNull();
  });
});
