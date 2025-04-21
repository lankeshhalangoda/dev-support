import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  imports: [FormsModule],
  templateUrl: './textarea-field.component.html',
  styleUrl: './textarea-field.component.scss'
})
export class TextAreaFieldComponent {

  @Output() outputTextFieldValue = new EventEmitter<string>();
  @Input() inputTextFieldValue: string = '';
  @Input() labelText: string = '';

  onChangeField() {
    this.outputTextFieldValue.emit(this.inputTextFieldValue);
  }
}
