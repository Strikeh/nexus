import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-decentralized-internet',
  templateUrl: './decentralized-internet.component.html',
  styleUrls: ['./decentralized-internet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecentralizedInternetComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Decentralized Internet' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, decentralized internet, protocol, tokenized satelites, ground stations',
      },
    ]);
    this.setTitle('Nexus - Decentralized Internet');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  scroll(element) {
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
