import { BaseComponent } from 'src/app/utils/base-component/base-component.component';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'nexus-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageHeaderComponent implements AfterViewInit {
  @Input() title: string;
  @Input() titleBackground: string;
  @Input() headerText: string;
  @Input() isSmall: boolean = false;
  @Input() alternativeMask: boolean = false;

  url = './../../assets/js/particles.js';

  constructor() {}

  ngAfterViewInit(): void {
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
