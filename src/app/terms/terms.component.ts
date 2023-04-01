import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Terms of Use' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content: 'nexus, crypto, blockchain, web3, Terms of Use',
      },
    ]);
    this.setTitle('Nexus - Terms of Use');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
