import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../../../core/services/recipe-service.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  @Input()
  updateList!: boolean;
  public recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.getList();
    if (this.updateList) this.getFilteredListByFavorites();
  }

  getList() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
  getFilteredListByFavorites() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes.filter((recipe: Recipe) => recipe.favourites);
    });
  }

  onRecipeDeleted(id: number) {
    console.log(id);
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  }
  onUpdateParent() {
    this.getList();
  }
}
