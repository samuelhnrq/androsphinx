import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRouter } from './home.routing';
import { WorkCarrouselComponent } from './work-carrousel/work-carrousel.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    HomeRouter,
    ScrollingModule,
  ],
  exports: [],
  declarations: [HomeComponent, WorkCarrouselComponent],
  providers: [],
})
export class HomeModule {}
