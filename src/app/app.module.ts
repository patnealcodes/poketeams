import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './modules/routing.module';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TeamsComponent } from './components/teams/teams.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, TeamsComponent, DetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
