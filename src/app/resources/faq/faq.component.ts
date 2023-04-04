import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FAQComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'FAQ' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content: 'nexus, crypto, blockchain, web3, faq',
      },
    ]);
    this.setTitle('Nexus - FAQ');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
