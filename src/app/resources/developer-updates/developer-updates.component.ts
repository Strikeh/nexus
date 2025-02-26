import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-developer-updates',
  templateUrl: './developer-updates.component.html',
  styleUrls: ['./developer-updates.component.scss'],
})
export class DevUpdatesComponent {
  updates: string[] = [];

  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Developer Updates' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content: 'nexus, crypto, blockchain, web3, dev, updates',
      },
    ]);
    this.setTitle('Nexus - Developer Updates');

    this.updates = ['2025-02-07', '2025-02-01', '2025-01-25', '2025-01-17', '2025-01-10'];
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  downloadFile(filePath) {
    let link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank';
    link.click();
  }
}
