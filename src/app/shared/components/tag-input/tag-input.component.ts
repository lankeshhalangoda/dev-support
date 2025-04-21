import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tag-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent {
  tags: string[] = [];
  inputValue: string = '';

  addTag() {
    const value = this.inputValue.trim();
    if (value && !this.tags.includes(value)) {
      this.tags.push(value);
    }
    this.inputValue = '';
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      this.addTag();
    }
  }
}
