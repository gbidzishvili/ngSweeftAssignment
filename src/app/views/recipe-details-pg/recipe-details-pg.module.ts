import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsPgComponent } from './recipe-details-pg.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RecipeDetailsPgComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
})
export class RecipeDetailsPgModule {}
