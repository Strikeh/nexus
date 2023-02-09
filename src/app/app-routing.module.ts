import { WhitepapersComponent } from './whitepapers/whitepapers.component';
import { LandingComponent } from './landing/landing.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'team', component: TeamComponent },
  { path: 'whitepapers', component: WhitepapersComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
