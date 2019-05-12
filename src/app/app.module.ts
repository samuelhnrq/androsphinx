import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultMaterialModule } from './material.module';
import { GhostService } from './services/ghost.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    DefaultMaterialModule,
    ScrollToModule.forRoot(),
    HttpClientModule
  ],
  providers: [GhostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
