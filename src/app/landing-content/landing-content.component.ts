import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nexus-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingContentComponent {}
