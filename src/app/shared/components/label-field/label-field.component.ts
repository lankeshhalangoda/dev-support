import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-field',
  imports: [],
  templateUrl: './label-field.component.html',
  styleUrl: './label-field.component.scss'
})
export class LabelFieldComponent {

  @Input() labelText:string = '';
}
