import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipeHomePgComponent } from './recipe-home-pg.component';

const routes: Routes = [
  {
    path: 'home',
    component: RecipeHomePgComponent,
    children: [{ path: 'list', component: RecipeListComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeHomePgRoutingModule {}
