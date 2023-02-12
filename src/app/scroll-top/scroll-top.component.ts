import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollTopComponent {
  windowScrolled: boolean;

  constructor(private readonly viewport: ViewportScroller) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    this.viewport.scrollToPosition([0, 0]);
  }
}
