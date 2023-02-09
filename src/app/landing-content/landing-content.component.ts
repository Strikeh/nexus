import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'nexus-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LandingContentComponent implements OnInit {
  sigchains: string = '';
  coinsInCirculation: string = '';
  stakingPercentage: string = '';
  stakedCoins: string = '';
  stakingAccounts: string = '';
  metricsLoaded = false;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.getMetrics();
  }

  getMetrics(): void {
    this.http
      .get('http://api.nexus.io:8080/system/get/metrics')
      .pipe(map((res: any) => res))
      .subscribe((result) => {
        const data = result['result'];
        if (data) {
          this.sigchains = data['sig_chains'].toLocaleString('en-US');
          const coinCirculation = Math.trunc(data['supply']['total']);
          this.coinsInCirculation = coinCirculation.toLocaleString('en-US');
          const stakedCoins = data['trust']['stake'];
          this.stakedCoins = stakedCoins.toLocaleString('en-US');
          this.stakingPercentage = `${Math.trunc(
            (stakedCoins / coinCirculation) * 100
          ).toLocaleString('en-US')} %`;
          this.stakingAccounts = data['trust']['total'].toLocaleString('en-US');
        }

        this.metricsLoaded = true;
      });
  }
}
