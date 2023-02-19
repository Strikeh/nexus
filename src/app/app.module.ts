import { BlockchainComponent } from './blockchain/blockchain.component';
import { ScriptService } from './script-service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { LandingComponent } from './landing/landing.component';

import * as $ from 'jquery';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { BannerComponent } from './banner/banner.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';
import { HttpClientModule } from '@angular/common/http';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { CommonModule } from '@angular/common';
import { BuyNexusComponent } from './buy-nexus/buy-nexus.component';
import { DecentralizedInternetComponent } from './decentralized-internet/decentralized-internet.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    LandingComponent,
    FooterComponent,
    HeaderComponent,
    LandingContentComponent,
    BannerComponent,
    WhitepapersComponent,
    RoadmapComponent,
    ScrollTopComponent,
    BuyNexusComponent,
    DecentralizedInternetComponent,
    BlockchainComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
