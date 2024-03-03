import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input()
  recipe!: Recipe;
  constructor(private router: Router) {}

  navigateToDetails() {
    // this.router.navigate(['/home', 'details']);
  }
}
