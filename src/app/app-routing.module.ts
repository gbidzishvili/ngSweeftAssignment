import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeHomePgComponent } from './views/recipe-home-pg/recipe-home-pg.component';
import { RecipeDetailsPgComponent } from './views/recipe-details-pg/recipe-details-pg.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { RecipeFormPgComponent } from './views/recipe-form-pg/recipe-form-pg.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: RecipeHomePgComponent,
  },
  { path: 'details', component: RecipeDetailsPgComponent },
  { path: 'form', component: RecipeFormPgComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
