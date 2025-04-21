import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
    ViewChild
  } from '@angular/core';
  import { NgFor, NgIf } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  
  @Component({
    selector: 'app-multi-select-searchable-dropdown',
    standalone: true,
    imports: [NgFor, NgIf, FormsModule],
    templateUrl: './multi-select-searchable-dropdown.component.html',
    styleUrls: ['./multi-select-searchable-dropdown.component.scss']
  })
  export class MultiSelectSearchableDropdownComponent {
    @Input() options: { id: string; text: string }[] = [];
    @Input() label: string = 'Select Options';
    @Output() selectedValuesChange = new EventEmitter<string[]>();
  
    @ViewChild('dropdownContainer') dropdownContainer!: ElementRef;
  
    dropdownOpen = false;
    searchText = '';
    selectedValues: string[] = [];
  
    get filteredOptions() {
      const search = this.searchText.toLowerCase();
      return this.options.filter(opt => opt.text.toLowerCase().includes(search));
    }
  
    toggleDropdown(): void {
      this.dropdownOpen = !this.dropdownOpen;
    }
  
    isSelected(id: string): boolean {
      return this.selectedValues.includes(id);
    }
  
    toggleSelection(id: string): void {
      if (this.isSelected(id)) {
        this.selectedValues = this.selectedValues.filter(val => val !== id);
      } else {
        this.selectedValues.push(id);
      }
      this.selectedValuesChange.emit(this.selectedValues);
    }
  
    removeTag(id: string): void {
      this.selectedValues = this.selectedValues.filter(val => val !== id);
      this.selectedValuesChange.emit(this.selectedValues);
    }
  
    clearAll(): void {
      this.selectedValues = [];
      this.selectedValuesChange.emit(this.selectedValues);
    }
  
    getOptionLabel(id: string): string {
      const match = this.options.find(opt => opt.id === id);
      return match ? match.text : '';
    }
  
    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
      if (this.dropdownContainer && !this.dropdownContainer.nativeElement.contains(event.target)) {
        this.dropdownOpen = false;
      }
    }
  }
  