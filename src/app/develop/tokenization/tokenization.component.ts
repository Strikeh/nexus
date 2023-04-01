import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tokenization',
  templateUrl: './tokenization.component.html',
  styleUrls: ['./tokenization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenizationComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Tokenization' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Tokenization, api, assets, nfts',
      },
    ]);
    this.setTitle('Nexus - Tokenization');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
