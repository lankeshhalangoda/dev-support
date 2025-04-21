import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  expandedIndex: number | null = null;

  accordionItems = [
    {
      title: 'Customer & Equipment Details',
      content: 'Customer: Cargills Food Company\nLocation: Kandalama Mirigama'
    },
    {
      title: 'Inspection Summary',
      content: 'Inspection completed on 13/Jan/2024. No issues found.'
    },
    {
      title: 'Service History',
      content: 'Last service: 14/Jan/2023. Next due: 14/Jul/2023.'
    }
  ];

  toggle(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
