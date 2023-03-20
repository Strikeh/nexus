import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nexus';
  showBannerAndFooter = false;

  constructor(private router: Router) {
    this.handleRouteEvents();
  }

  handleRouteEvents() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        (<any>window).gtag('event', 'page_view', {
          page_location: document.location.origin + event.urlAfterRedirects,
          page_title: event.urlAfterRedirects.substring(1),
        });
      }

      if (this.router.url === 'landing' || this.router.url === '/') {
        return (this.showBannerAndFooter = true);
      }
      this.showBannerAndFooter = false;
    });
  }
}
