import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShareCardDataService } from '../../shared/services/share-card-data.service';
import { Observable, Subject } from 'rxjs';
import { Recipe } from '../recipe-home-pg/models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-details-pg',
  templateUrl: './recipe-details-pg.component.html',
  styleUrl: './recipe-details-pg.component.scss',
})
export class RecipeDetailsPgComponent implements OnInit {
  recipeData$!: Observable<Recipe>;
  constructor(
    private shareDataService: ShareCardDataService
  ) {}
  ngOnInit(): void {
    this.shareDataService.selectedRecipeId.subscribe((id: any) => {
      this.recipeData$ = this.shareDataService.getRecipe(id);
    });
  }
}
