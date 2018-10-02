import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRouter } from './home.routing';
import { DefaultMaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, HomeRouter, DefaultMaterialModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
