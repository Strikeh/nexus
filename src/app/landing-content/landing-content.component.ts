import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, zip } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

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

  articles: any[];
  videos: any[];

  showArticles = false;
  showVideos = false;

  constructor(
    private readonly http: HttpClient,
    private readonly meta: Meta,
    private readonly title: Title
  ) {
    this.meta.addTags([
      { name: 'description', content: 'Landing page of Nexus.io' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'Nexus, crypto, nxs, next-gen, blockchain, web3, sigchains, free transactions, develop, Decentralize, quantum resistance, innovative, technology',
      },
    ]);
    this.setTitle('Nexus - Landing Page');

    this.fetchLatestArticles();
    this.fetchLatestVideos();
  }

  ngOnInit(): void {
    this.getMetrics();
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  fetchLatestArticles(): void {
    this.http.get('/assets/data/articles.json').subscribe((data: any) => {
      // set items to json response
      this.articles = data.slice(0, 3);

      this.showArticles = true;
    });
  }

  fetchLatestVideos(): void {
    this.http.get('/assets/data/videos.json').subscribe((data: any) => {
      // set items to json response
      this.videos = data.slice(1).slice(-3);

      this.showVideos = true;
    });
  }

  getMetrics(): void {
    const metricsObservable = this.http.get(
      'https://explorer.nexus.io/api/v1/mainnet/ledger/get/info'
    );

    const infoObservable = this.http.get(
      'https://explorer.nexus.io/api/v1/mainnet/system/get/metrics'
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
