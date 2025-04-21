import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapsible-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapsible-section.component.html',
  styleUrls: ['./collapsible-section.component.scss']
})
export class CollapsibleSectionComponent {
  @Input() title: string = 'Section Title';
  @Input() initiallyExpanded: boolean = false;
  @Input() previewItems: string[] = []; // <-- New input for collapsed description

  isExpanded: boolean = false;

  ngOnInit() {
    this.isExpanded = this.initiallyExpanded;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
