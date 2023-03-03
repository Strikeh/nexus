import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nexus-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  url = './../../assets/js/scripts.js';

  constructor() {
    this.loadScript();
  }

  public loadScript() {
    let node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
