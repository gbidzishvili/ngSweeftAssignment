import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeHomePgComponent } from './recipe-home-pg.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCardComponent } from './components/recipe-list/recipe-card/recipe-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    RecipeHomePgComponent,
    RecipeListComponent,
    RecipeCardComponent,
    // MatCardModule,
    // MatFormFieldModule,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class RecipeHomePgModule {}
