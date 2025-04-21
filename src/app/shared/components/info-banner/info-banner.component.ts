import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.scss']
})
export class InfoBannerComponent {
  @Input() message: string = 'This is an info message.';
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';

  get icon() {
    switch (this.type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'info':
      default:
        return 'ℹ️';
    }
  }

  get bannerClasses(): string {
    switch (this.type) {
      case 'success':
        return 'bg-green-50 border-green-300 text-green-700';
      case 'warning':
        return 'bg-yellow-50 border-yellow-300 text-yellow-700';
      case 'error':
        return 'bg-red-50 border-red-300 text-red-700';
      case 'info':
      default:
        return 'bg-blue-50 border-blue-300 text-blue-700';
    }
  }
}
