import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  steps = [
    { label: 'Requested', date: '2024-12-01', status: 'completed' },
    { label: 'Approved', date: '2024-12-03', status: 'completed' },
    { label: 'Processing', date: '2024-12-05', status: 'current' },
    { label: 'Shipped', date: '', status: 'upcoming' },
    { label: 'Delivered', date: '', status: 'upcoming' }
  ];
}
