import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nexus';
  showBannerAndFooter = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (router.url === 'landing' || router.url === '/') {
        return (this.showBannerAndFooter = true);
      }
      this.showBannerAndFooter = false;
    });
  }
}
