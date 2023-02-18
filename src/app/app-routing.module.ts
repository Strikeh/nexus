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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
