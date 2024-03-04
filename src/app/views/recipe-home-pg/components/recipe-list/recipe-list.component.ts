import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../core/services/recipe-service.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  onRecipeDeleted(id: number) {
    console.log(id);
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  }
}
