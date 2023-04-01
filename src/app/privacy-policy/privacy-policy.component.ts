import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Privacy Policy' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content: 'nexus, crypto, blockchain, web3, Privacy Policy',
      },
    ]);
    this.setTitle('Nexus - Privacy Policy');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
