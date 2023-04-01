import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss'],
})
export class BrandingComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Branding' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Branding, logos, graphics, infographic, style',
      },
    ]);
    this.setTitle('Nexus - Branding');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
