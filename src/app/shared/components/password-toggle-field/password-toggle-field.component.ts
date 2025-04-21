import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-toggle-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-toggle-field.component.html',
  styleUrls: ['./password-toggle-field.component.scss']
})
export class PasswordToggleFieldComponent {
  password: string = '';
  showPassword: boolean = false;

  toggleVisibility() {
    this.showPassword = !this.showPassword;
  }
}
