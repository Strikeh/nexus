import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(
    private router: Router,
    private readonly meta: Meta,
    private readonly title: Title
  ) {
    this.meta.addTags([
      { name: 'description', content: 'Landing page' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3,  next-gen, blockchain, web3, sigchains, free transactions, develop, Decentralize, quantum resistance, innovative, technology',
      },
    ]);
    this.setTitle('Nexus - Landing');
  }

  navigateToTeam(): void {
    this.router.navigate(['/team']);
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
