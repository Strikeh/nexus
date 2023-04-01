import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.scss'],
})
export class TransactComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Transact' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Transact, fast, free, secure, easy, decentralized',
      },
    ]);
    this.setTitle('Nexus - Transact');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
