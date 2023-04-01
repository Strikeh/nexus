import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockchainComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Blockchain' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, virtual machine, software stack, signature chains, quantum resistance, three-dimensional chain, 3DC',
      },
    ]);
    this.setTitle('Nexus - Blockchain');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
