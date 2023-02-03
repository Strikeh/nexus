import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { LandingComponent } from './landing/landing.component';

import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

@NgModule({
  declarations: [AppComponent, TeamComponent, LandingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
