import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeFormPgComponent } from './recipe-form-pg.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [RecipeFormPgComponent],
  imports: [
    CommonModule,
    MatPseudoCheckboxModule,
    MatError,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class RecipeFormPgModule {}
