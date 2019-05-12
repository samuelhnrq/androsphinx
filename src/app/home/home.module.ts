import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRouter } from './home.routing';
import { DefaultMaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { WorkCarrouselComponent } from './work-carrousel/work-carrousel.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    HomeRouter,
    DefaultMaterialModule,
    ScrollToModule,
    ScrollingModule,
  ],
  exports: [],
  declarations: [HomeComponent, WorkCarrouselComponent],
  providers: [],
})
export class HomeModule { }
