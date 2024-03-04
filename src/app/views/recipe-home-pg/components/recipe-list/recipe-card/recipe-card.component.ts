import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../../../core/services/recipe-service.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input()
  recipe!: Recipe;
  constructor(private router: Router, private recipeService: RecipeService) {}

  navigateToDetails() {
    this.router.navigate(['/details']);
  }
  edit(id: number) {
    this.recipeService.updateRecipe(id);
  }
  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
  }
}
