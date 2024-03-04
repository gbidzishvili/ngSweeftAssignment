import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../shared/models/recipe.model';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  createRecipe(recipe: Recipe) {
    return this.http.post('http://localhost:3000/recipes', recipe);
  }
  getRecipes(): Observable<any> {
    return this.http.get('http://localhost:3000/recipes');
  }
  updateRecipe(id: number, recipe: Recipe): Observable<Object> {
    return this.http.put(`http://localhost:3000/recipes/${id}`, recipe);
  }
  deleteRecipe(id: number) {
    return this.http.delete(`http://localhost:3000/recipes/${id}`);
  }
  updateFavouritesStatus(
    recipeId: number,
    isFavourite: boolean
  ): Observable<any> {
    // Construct the request body to specifically update the 'favourites' property
    const requestBody = { favourites: isFavourite };
    return this.http.patch(
      `http://localhost:3000/recipes/${recipeId}`,
      requestBody
    );
  }
}
