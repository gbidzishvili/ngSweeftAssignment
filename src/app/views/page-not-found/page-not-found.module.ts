import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class PageNotFoundModule {}
