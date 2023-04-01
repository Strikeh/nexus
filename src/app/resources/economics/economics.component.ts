import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-economics',
  templateUrl: './economics.component.html',
  styleUrls: ['./economics.component.scss'],
})
export class EconomicsComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Economics' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Economics, economic, hyperinflation, money, liquidity, central bank',
      },
    ]);
    this.setTitle('Nexus - Economics');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
