import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../../../../shared/models/recipe.model';
import { RecipeService } from '../../../../../core/services/recipe-service.service';
import { ShareCardDataService } from '../../../../../shared/services/share-card-data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Output()
  recipeDeleted = new EventEmitter<number>();
  @Output()
  updateParent = new EventEmitter<number>();
  @Input()
  recipe!: Recipe;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private shareDataService: ShareCardDataService
  ) {}

  // goes to details page
  goToDetails(id: number) {
    this.shareDataService.selectedRecipeId.next(id);
    this.router.navigate(['/details']);
  }
  // editing recipe
  edit(id: number) {
    this.shareDataService.selectedRecipeId.next(id);
    this.router.navigate(['/form']);
  }
  // deleting recipe
  deleteRecipe(id: number) {
    this.recipeService
      .deleteRecipe(id)
      .subscribe(() => this.recipeDeleted.emit(id));
  }
  // Method to update Favourites Status
  updateFavouritesStatus(recipe: Recipe) {
    const favorites = this.recipe.favourites ? false : true;
    console.log('favs', favorites);
    this.recipeService
      .updateFavouritesStatus(recipe.id, favorites)
      .subscribe(() => this.updateParent.emit());
  }
}
