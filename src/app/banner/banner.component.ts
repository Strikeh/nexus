import {
  ChangeDetectionStrategy,
  Component,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'nexus-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  safeSrc: SafeResourceUrl;
  sanitizedUrl: string;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      '//www.youtube.com/watch?v=8VZfrwLfwRo'
    );

    this.sanitizedUrl = this.sanitizer.sanitize(
      SecurityContext.RESOURCE_URL,
      this.safeSrc
    );
  }

  navigateToWiki(): void {
    (window as any).open('https://wiki.nexus.io/en/tritium++', '_blank');
  }
}
