import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  formProgressValue: number = 50; // You can change this value for testing

  get progressWidth(): string {
    return `${this.formProgressValue}%`;
  }
}
