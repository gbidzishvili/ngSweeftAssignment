import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShareCardDataService } from '../../shared/services/share-card-data.service';
import { Observable, Subject, catchError, of } from 'rxjs';
import { Recipe } from '../../shared/models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-details-pg',
  templateUrl: './recipe-details-pg.component.html',
  styleUrl: './recipe-details-pg.component.scss',
})
export class RecipeDetailsPgComponent implements OnInit {
  recipeData$!: Observable<Recipe | null>;
  constructor(private shareDataService: ShareCardDataService) {}
  ngOnInit(): void {
    this.shareDataService.selectedRecipeId.subscribe((id: any) => {
      if (this.shareDataService.getRecipe(id)) {
        this.recipeData$ = this.shareDataService.getRecipe(id).pipe(
          catchError((error) => {
            // Handle the error here
            console.error('Error fetching recipe:', error);
            // Return an empty Observable, an Observable with default values, or throwError as needed
            return of(null); // Example: returning `null` to indicate an error was caught
          })
        );
      }
    });
  }
}
