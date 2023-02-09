import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nexus-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  navigateToWiki(): void {
    (window as any).open('https://wiki.nexus.io/en/tritium++', '_blank');
  }
}
