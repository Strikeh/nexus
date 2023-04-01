import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-namespaces',
  templateUrl: './namespaces.component.html',
  styleUrls: ['./namespaces.component.scss'],
})
export class NamespacesComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Namespaces' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Namespaces, multi-tiered, global name ownerschip, account, user, branding',
      },
    ]);
    this.setTitle('Nexus - Namespaces');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
