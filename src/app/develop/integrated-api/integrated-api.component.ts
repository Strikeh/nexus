import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-integrated-api',
  templateUrl: './integrated-api.component.html',
  styleUrls: ['./integrated-api.component.scss'],
})
export class IntegratedApiComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Integrated API' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Integrated API, json-api, nfts, signature chains, programming interface, development skills',
      },
    ]);
    this.setTitle('Nexus - Integrated API');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
