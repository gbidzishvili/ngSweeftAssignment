import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-favorites',
  templateUrl: './filter-favorites.component.html',
  styleUrl: './filter-favorites.component.scss',
})
export class FilterFavoritesComponent {
  @Output()
  filterListEvent: EventEmitter<void> = new EventEmitter();
  onFilterBtnClick() {
    this.filterListEvent.emit();
  }
}
