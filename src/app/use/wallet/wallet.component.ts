import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
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

  downloadFile(filePath, event: any) {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = filePath;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    link.remove();

    event.preventDefault();
  }
}
