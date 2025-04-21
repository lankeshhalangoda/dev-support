import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.scss']
})
export class TextInputFieldComponent {
  inputValue: string = '';
}
