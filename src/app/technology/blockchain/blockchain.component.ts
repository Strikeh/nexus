import { BaseComponent } from 'src/app/utils/base-component/base-component.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockchainComponent extends BaseComponent {}
