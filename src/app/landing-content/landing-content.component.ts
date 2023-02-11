import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, zip } from 'rxjs';

@Component({
  selector: 'nexus-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LandingContentComponent implements OnInit, AfterViewInit {
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
    const metricsObservable = this.http.get(
      'http://lite4.nexenture.xyz:8080/system/get/metrics'
    );

    const infoObservable = this.http.get(
      'http://lite4.nexenture.xyz:8080/ledger/get/info'
    );

    zip(metricsObservable, infoObservable)
      .pipe(map((res: any) => ({ ...res[0]['result'], ...res[1]['result'] })))
      .subscribe((result) => {
        if (result) {
          this.sigchains = result['sigchains'].toLocaleString('en-US');
          const coinCirculation = Math.trunc(result['supply']['total']);
          this.coinsInCirculation = coinCirculation.toLocaleString('en-US');
          const stakedCoins = result['trust']['stake'];
          this.stakedCoins = Math.trunc(stakedCoins).toLocaleString('en-US');
          this.stakingPercentage = `${Math.trunc(
            (stakedCoins / coinCirculation) * 100
          ).toLocaleString('en-US')} %`;
          this.stakingAccounts =
            result['trust']['total'].toLocaleString('en-US');
        }

        this.metricsLoaded = true;
      });
  }

  ngAfterViewInit(): void {
    const vid = document.getElementById('HPVid');
    const mp4 = document.createElement('source');
    mp4.type = 'video/mp4';
    mp4.src = 'images/video/mVid.mp4';

    const webm = document.createElement('source');
    webm.type = 'video/webm';
    webm.src = 'images/video/mVid.webm';

    if (window.innerWidth >= 641) {
      mp4.src = 'images/video/mVid.mp4';
      webm.src = 'images/video/mVid.webm';
    } else {
      mp4.src = 'images/video/mVidMobile.mp4';
      webm.src = 'images/video/mVidMobile.webm';
    }

    vid.appendChild(mp4);
    vid.appendChild(webm);
    document.getElementById('videoDiv').appendChild(vid);
  }
}
