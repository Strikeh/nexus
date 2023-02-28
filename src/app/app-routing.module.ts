import { TokenizationComponent } from './tokenization/tokenization.component';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { BlogComponent } from './blog/blog.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { DecentralizedInternetComponent } from './decentralized-internet/decentralized-internet.component';
import { BuyNexusComponent } from './buy-nexus/buy-nexus.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';
import { LandingComponent } from './landing/landing.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
