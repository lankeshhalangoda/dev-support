import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
})
export class CheckboxFieldComponent {
  @Input() label: string = '';
  @Input() isChecked: boolean = false;
  @Output() isCheckedChange = new EventEmitter<boolean>();

  onToggle() {
    this.isChecked = !this.isChecked;
    this.isCheckedChange.emit(this.isChecked);
  }
}
