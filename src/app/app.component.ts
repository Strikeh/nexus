import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TawkService } from './services/tawk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nexus';
  showBanner = false;
  showFooter = false;
  showHeader = true;

  constructor(
    private router: Router, 
    private readonly meta: Meta,
    private tawkService: TawkService
  ) {
    this.handleRouteEvents();
    
    // Load Tawk.to widget
    this.tawkService.loadTawkTo();

    this.meta.addTags([
      { name: 'og:locale', content: 'en-GB' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Nexus (NXS) Website' },
      { name: 'og:url', content: 'www.nexus.io' },
      {
        name: 'og:description',
        content:
          'Connecting a Decentralized World. Nexus is a next-generation blockchain technology that is re-building the internet from the ground up. Most innovative Technology. Quantum Resistance. Free Simple Transactions.',
      },
      {
        name: 'og:image',
        content: 'https://nexus.io/images/nexus-logo-blue.png',
      },
      {
        name: 'og:image:url',
        content: 'https://nexus.io/images/nexus-logo-blue.png',
      },
      {
        name: 'og:image:secure_url',
        content: 'https://nexus.io/images/nexus-logo-blue.png',
      },
      {
        name: 'og:image:alt',
        content: 'https://nexus.io/images/nexus-logo-blue.png',
      },
    ]);
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
        this.showHeader = true;
        this.showFooter = true;
        this.showBanner = true;
        return;
      }

      if (this.router.url === '/resourcehub') {
        this.showHeader = false;
        this.showFooter = true;
        this.showBanner = false;
        return;
      }

      this.showHeader = true;
      this.showBanner = false;
      this.showFooter = false;
    });
  }
}
