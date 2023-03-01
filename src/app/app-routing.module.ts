import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TokenizationComponent } from './tokenization/tokenization.component';
import { OperatingSystemComponent } from './technology/operating-system/operating-system.component';
import { BlogComponent } from './resources/blog/blog.component';
import { BlockchainComponent } from './technology/blockchain/blockchain.component';
import { DecentralizedInternetComponent } from './technology/decentralized-internet/decentralized-internet.component';
import { BuyNexusComponent } from './develop/buy-nexus/buy-nexus.component';
import { RoadmapComponent } from './technology/roadmap/roadmap.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';
import { LandingComponent } from './landing/landing.component';
import { TeamComponent } from './team/team.component';
import { WalletComponent } from './develop/wallet/wallet.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'team', component: TeamComponent },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'buynexus', component: BuyNexusComponent },
  { path: 'whitepapers', component: WhitepapersComponent },
  { path: 'decentralizedinternet', component: DecentralizedInternetComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'operatingsystem', component: OperatingSystemComponent },
  { path: 'tokenization', component: TokenizationComponent },
  { path: 'wallet', component: WalletComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
