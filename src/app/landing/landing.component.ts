import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  title = 'nexus';

  constructor(private router: Router) {}

  navigateToTeam(): void {
    this.router.navigate(['/team']);
  }
}
