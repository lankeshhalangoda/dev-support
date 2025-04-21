import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown-field',
  imports: [FormsModule, NgFor],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.scss'
})
export class DropdownFieldComponent {

  @Output() outputDropdownFieldValue = new EventEmitter<string>();
  @Input() inputDropdownFieldValue: string = '';
  @Input() responses: { id: string, text: string }[] = [];

  onChangeDropdownField(): void {    
    this.outputDropdownFieldValue.emit(this.inputDropdownFieldValue);
  }

}
