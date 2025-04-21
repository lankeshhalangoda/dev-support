import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox-group-field.component.html',
  styleUrls: ['./checkbox-group-field.component.scss']
})
export class CheckboxGroupFieldComponent {
  @Input() labelText: string = '';
  @Input() options: { id: string; text: string }[] = [];
  @Input() selectedValues: string[] = [];

  @Output() selectedValuesChange = new EventEmitter<string[]>();

  toggleValue(optionId: string): void {
    if (this.selectedValues.includes(optionId)) {
      this.selectedValues = this.selectedValues.filter(id => id !== optionId);
    } else {
      this.selectedValues.push(optionId);
    }
    this.selectedValuesChange.emit(this.selectedValues);
  }
}
