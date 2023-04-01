import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dapps',
  templateUrl: './dapps.component.html',
  styleUrls: ['./dapps.component.scss'],
})
export class DappsComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Dapps' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Dapps, invoices, nft marketplace, non-profit',
      },
    ]);
    this.setTitle('Nexus - Dapps');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
