import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-drawing-pad',
  imports: [],
  templateUrl: './drawing-pad.component.html',
  styleUrl: './drawing-pad.component.scss'
})
export class DrawingPadComponent implements AfterViewInit {

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @Output() addSignatureFile = new EventEmitter<File>();
  @Input() labelText:string = '';

  private ctx!: CanvasRenderingContext2D | null;
  private drawing = false;

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));

    if (!this.ctx) {
      console.error('Canvas rendering context is not available.');
      return;
    }

    this.ctx.lineWidth = 2;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#000';
  }

  resizeCanvas() {
    const canvasEl = this.canvas.nativeElement;
    canvasEl.width = canvasEl.offsetWidth;
    canvasEl.height = canvasEl.offsetHeight;
  }

  startDrawing(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    this.drawing = true;
    const { x, y } = this.getCanvasCoords(event);
    this.ctx?.beginPath();
    this.ctx?.moveTo(x, y);
  }

  stopDrawing() {
    this.addSignatureFile.emit(this.saveSignature());
    this.drawing = false;
    this.ctx?.closePath();
  }

  draw(event: MouseEvent | TouchEvent) {
    if (!this.drawing || !this.ctx) return;
    event.preventDefault();
    const { x, y } = this.getCanvasCoords(event);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  getCanvasCoords(event: MouseEvent | TouchEvent) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  clearCanvas() {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }
  }

  saveSignature(): File {
    const signatureData = this.canvas.nativeElement.toDataURL('image/png');
    return this._base64ToFile(signatureData, "signature.png");
  }

  private _base64ToFile(base64: string, fileName: string): File {
    const arr = base64.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : 'image/png';

    const byteString = atob(arr[1]);
    const byteArray = new Uint8Array(byteString.length);

    for (let i = 0; i < byteString.length; i++) {
      byteArray[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([byteArray], { type: mime });
    return new File([blob], fileName, { type: mime });
  }
}