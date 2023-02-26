import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nexus-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input() title: string;
  @Input() headerText: string;
  @Input() isSmall: boolean = false;
}
