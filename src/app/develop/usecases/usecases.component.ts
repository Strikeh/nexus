import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.scss'],
})
export class UsecasesComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Use cases' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Use cases, tokenized, assets, nfts, tickets, voting, governance, energy, environmental, securities, dao, copyrights, supply chains, protected assets',
      },
    ]);
    this.setTitle('Nexus - Use cases');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
