import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-home-pg',
  templateUrl: './recipe-home-pg.component.html',
  styleUrl: './recipe-home-pg.component.scss',
})
export class RecipeHomePgComponent {
  updateList: boolean = false;
  filterListEventSubs() {
    this.updateList = !this.updateList;
  }
}
