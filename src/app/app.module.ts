import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultMaterialModule } from './material.module';
import { ButterCMSService } from './services/buttercms.service';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [ButterCMSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
