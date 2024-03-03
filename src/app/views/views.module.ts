import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { RecipeDetailsPgModule } from './recipe-details-pg/recipe-details-pg.module';
import { RecipeFormPgModule } from './recipe-form-pg/recipe-form-pg.module';
import { RecipeHomePgModule } from './recipe-home-pg/recipe-home-pg.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageNotFoundModule,
    RecipeDetailsPgModule,
    RecipeFormPgModule,
    RecipeHomePgModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    PageNotFoundModule,
    RecipeDetailsPgModule,
    RecipeFormPgModule,
    RecipeHomePgModule,
    MatIconModule,
  ],
})
export class ViewsModule {}
