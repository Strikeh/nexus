import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Wallet' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Wallet, guide, username, password, pin, signature chains, mobile, download',
      },
    ]);
    this.setTitle('Nexus - Wallet');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
