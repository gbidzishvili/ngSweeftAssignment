import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../../models/recipe.model';
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
  @Input()
  recipe!: Recipe;
  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private shareDataService: ShareCardDataService
  ) {}

  navigateToDetails(id: number) {
    this.shareDataService.selectedRecipeId.next(id);
    this.router.navigate(['/details']);
  }
  edit(id: number) {
    this.recipeService.updateRecipe(id);
  }
  deleteRecipe(id: number) {
    this.recipeService
      .deleteRecipe(id)
      .subscribe(() => this.recipeDeleted.emit(id));
  }
}
