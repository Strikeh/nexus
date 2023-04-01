import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Modules' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Modules, desktop wallet, web application, guide',
      },
    ]);
    this.setTitle('Nexus - Modules');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
