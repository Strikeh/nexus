import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BubbleComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'no-code' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, no-code, nocode, bubble, api, bubble plugin, wix, dapp',
      },
    ]);
    this.setTitle('Nexus - No-Code (Bubble)');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
