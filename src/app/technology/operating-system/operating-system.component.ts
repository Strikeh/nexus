import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-operating-system',
  templateUrl: './operating-system.component.html',
  styleUrls: ['./operating-system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperatingSystemComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Operating System' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Operating System, lx-os, signature chains, os, database',
      },
    ]);
    this.setTitle('Nexus - Operating System');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
