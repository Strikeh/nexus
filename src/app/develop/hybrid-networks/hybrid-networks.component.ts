import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-hybrid-networks',
  templateUrl: './hybrid-networks.component.html',
  styleUrls: ['./hybrid-networks.component.scss'],
})
export class HybridNetworksComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Hybrid Networks' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Hybrid Networks, hybrid mode, tritium, network',
      },
    ]);
    this.setTitle('Nexus - Hybrid Networks');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
