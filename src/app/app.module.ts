import { ModulesComponent } from './develop/modules/modules.component';
import { BlockchainComponent } from './technology/blockchain/blockchain.component';
import { ScriptService } from './services/script-service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { LandingComponent } from './landing/landing.component';

import * as $ from 'jquery';
import 'magnific-popup';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { BannerComponent } from './banner/banner.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';
import { HttpClientModule } from '@angular/common/http';
import { RoadmapComponent } from './technology/roadmap/roadmap.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { CommonModule } from '@angular/common';
import { BuyNexusComponent } from './use/buy-nexus/buy-nexus.component';
import { DecentralizedInternetComponent } from './technology/decentralized-internet/decentralized-internet.component';
import { BlogComponent } from './resources/blog/blog.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { OperatingSystemComponent } from './technology/operating-system/operating-system.component';
import { TokenizationComponent } from './develop/tokenization/tokenization.component';
import { WalletComponent } from './use/wallet/wallet.component';
import { VideosComponent } from './resources/videos/videos.component';
import { BaseComponent } from './utils/base-component/base-component.component';
import { BubbleComponent } from './develop/bubble/bubble.component';
import { IntegratedApiComponent } from './develop/integrated-api/integrated-api.component';
import { ContractsComponent } from './develop/contracts/contracts.component';
import { HybridNetworksComponent } from './develop/hybrid-networks/hybrid-networks.component';
import { UsecasesComponent } from './develop/usecases/usecases.component';
import { TransactComponent } from './use/transact/transact.component';
import { StakeMineComponent } from './use/stake-mine/stake-mine.component';
import { AssetsComponent } from './use/assets/assets.component';
import { NamespacesComponent } from './use/namespaces/namespaces.component';
import { DappsComponent } from './use/dapps/dapps.component';
import { SecurityAuditComponent } from './resources/security-audit/security-audit.component';
import { EconomicsComponent } from './resources/economics/economics.component';
import { BrandingComponent } from './resources/branding/branding.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';

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
    BlogComponent,
    PageHeaderComponent,
    OperatingSystemComponent,
    TokenizationComponent,
    WalletComponent,
    VideosComponent,
    BaseComponent,
    BubbleComponent,
    IntegratedApiComponent,
    ContractsComponent,
    HybridNetworksComponent,
    ModulesComponent,
    UsecasesComponent,
    TransactComponent,
    StakeMineComponent,
    AssetsComponent,
    NamespacesComponent,
    DappsComponent,
    SecurityAuditComponent,
    EconomicsComponent,
    BrandingComponent,
    PrivacyPolicyComponent,
      TermsComponent
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
