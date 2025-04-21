import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-button-field',
  imports: [FormsModule, NgFor],
  templateUrl: './radio-button-field.component.html',
  styleUrl: './radio-button-field.component.scss'
})
export class RadioButtonFieldComponent {
  @Input() inputRadioFieldValue:string = '';
  @Input() uniqueId:string = '';
  @Input() responses:{id:string, text:string}[] = [];
  @Output() outputRadioFieldValue = new EventEmitter<string>();

  onChangeRadioButtonField(id:string): void {    
    this.outputRadioFieldValue.emit(id);
  }
}
