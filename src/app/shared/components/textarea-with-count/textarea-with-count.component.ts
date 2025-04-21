import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea-with-count',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textarea-with-count.component.html',
  styleUrls: ['./textarea-with-count.component.scss']
})
export class TextareaWithCountComponent {
  inputText: string = '';
  maxLength: number = 200; // You can change this as needed
}
