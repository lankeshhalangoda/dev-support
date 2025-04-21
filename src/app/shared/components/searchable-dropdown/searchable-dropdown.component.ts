import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchable-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: ['./searchable-dropdown.component.scss']
})
export class SearchableDropdownComponent {
  options: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Mango', 'Pineapple'];
  filteredOptions: string[] = [...this.options];
  searchText: string = '';
  selected: string | null = null;
  dropdownOpen: boolean = false;

  @ViewChild('dropdownContainer') dropdownContainer!: ElementRef;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) {
      this.filteredOptions = [...this.options];
    }
  }

  selectOption(option: string) {
    this.selected = option;
    this.searchText = option;
    this.dropdownOpen = false;
  }

  filterOptions() {
    const value = this.searchText.toLowerCase();
    this.filteredOptions = this.options.filter(opt => opt.toLowerCase().includes(value));
  }

  // ✅ Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.dropdownContainer?.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.dropdownOpen = false;
    }
  }
}
