import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploaderComponent } from './file-uploader.component';

describe('FileUploaderComponent', () => {
  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the file uploader component', () => {
    expect(component).toBeTruthy();
  });

  it('should store selected file on manual upload', () => {
    const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
    const event = { target: { files: [mockFile] } } as any;
    component.onFileSelected(event);
    expect(component.selectedFile?.name).toBe('test.txt');
  });
});
