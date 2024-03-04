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
  public recipes$!: Observable<Recipe[]>;
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipes$ = this.recipeService.getRecipes();
  }
}
