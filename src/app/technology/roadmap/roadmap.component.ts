import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapComponent {
  url = './../../assets/js/particles.js';

  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Roadmap' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, TAO, framework, goals, lisp, trust, tritium, api, pooled staking, mobile wallet, p2p, market, augmented contracts, hybrid mode, amine',
      },
    ]);
    this.setTitle('Nexus - Roadmap');

    this.loadScript();
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  public loadScript() {
    let node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
