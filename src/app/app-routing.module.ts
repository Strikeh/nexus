import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TokenizationComponent } from './develop/tokenization/tokenization.component';
import { BubbleComponent } from './develop/bubble/bubble.component';
import { OperatingSystemComponent } from './technology/operating-system/operating-system.component';
import { BlogComponent } from './resources/blog/blog.component';
import { BlockchainComponent } from './technology/blockchain/blockchain.component';
import { DecentralizedInternetComponent } from './technology/decentralized-internet/decentralized-internet.component';
import { BuyNexusComponent } from './use/buy-nexus/buy-nexus.component';
import { RoadmapComponent } from './technology/roadmap/roadmap.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';
import { LandingComponent } from './landing/landing.component';
import { TeamComponent } from './team/team.component';
import { VideosComponent } from './resources/videos/videos.component';
import { WalletComponent } from './use/wallet/wallet.component';
import { ModulesComponent } from './develop/modules/modules.component';
import { HybridNetworksComponent } from './develop/hybrid-networks/hybrid-networks.component';
import { ContractsComponent } from './develop/contracts/contracts.component';
import { IntegratedApiComponent } from './develop/integrated-api/integrated-api.component';

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
  { path: 'bubble', component: BubbleComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'integratedapi', component: IntegratedApiComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'hybrid-networks', component: HybridNetworksComponent },
  { path: 'modules', component: ModulesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
