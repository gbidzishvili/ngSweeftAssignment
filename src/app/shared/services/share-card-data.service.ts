import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Recipe } from '../../views/recipe-home-pg/models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShareCardDataService {
  selectedRecipeId = new BehaviorSubject<number | null>(null);
  constructor(private http: HttpClient) {}
  getRecipe(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/recipes/${id}`);
  }
}
