import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Contracts' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content: 'nexus, crypto, blockchain, web3, contracts, dsl, fees',
      },
    ]);
    this.setTitle('Nexus - Contracts');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
