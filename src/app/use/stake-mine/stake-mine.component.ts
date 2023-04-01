import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stake-mine',
  templateUrl: './stake-mine.component.html',
  styleUrls: ['./stake-mine.component.scss'],
})
export class StakeMineComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Stake & Mine' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, staking, mining, proof of work, pow, proof of stake, pos, energy efficient, primepool, algorithm, hashcash, FPGA, ASIC',
      },
    ]);
    this.setTitle('Nexus - Stake & Mine');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
