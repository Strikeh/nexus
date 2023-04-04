import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss'],
})
export class GlossaryComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Glossary' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content: 'nexus, crypto, blockchain, web3, glossary',
      },
    ]);
    this.setTitle('Nexus - Glossary');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
