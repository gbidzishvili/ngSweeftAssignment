import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../views/recipe-home-pg/models/recipe.model';
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
}
