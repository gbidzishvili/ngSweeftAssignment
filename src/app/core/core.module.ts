import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatButtonModule, HttpClientModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
