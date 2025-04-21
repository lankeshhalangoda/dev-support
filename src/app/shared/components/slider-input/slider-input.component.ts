import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.scss']
})
export class SliderInputComponent {
  sliderValue: number = 50;
  min: number = 0;
  max: number = 100;
  step: number = 1;
}
