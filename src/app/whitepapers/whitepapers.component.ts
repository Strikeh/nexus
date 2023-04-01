import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-whitepapers',
  templateUrl: './whitepapers.component.html',
  styleUrls: ['./whitepapers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhitepapersComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Whitepapers' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Whitepaper, trust, tritium, tritium++, protocol',
      },
    ]);
    this.setTitle('Nexus - Whitepapers');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
