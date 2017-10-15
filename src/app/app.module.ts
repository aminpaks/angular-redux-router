import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './store/store.module';
import { HomeModule } from './home';
import { FeatureXModule } from './feature-x/feature-x.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    HomeModule,
    FeatureXModule,
    StoreModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
