import {
  Renderer2,
  OnInit,
  Inject,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ScriptService } from '../../services/script-service';

declare const TradingView: any;

const CRYPTO_COM_SCRIPT_PATH =
  'https://crypto.com/price/static/widget/index.js';
const TRADINGVIEW_SCRIPT_PATH = 'https://s3.tradingview.com/tv.js';
const CRYPTOHOPPER_SCRIPT_PATH =
  'https://www.cryptohopper.com/widgets/js/script';
const COINGEKKO_SCRIPT_PATH =
  'https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js';

@Component({
  selector: 'nexus-buy',
  templateUrl: './buy-nexus.component.html',
  styleUrls: ['./buy-nexus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuyNexusComponent implements OnInit {
  @ViewChild('tradingview') tradingview?: ElementRef;

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptService,
    private readonly meta: Meta,
    private readonly title: Title
  ) {
    this.meta.addTags([
      { name: 'description', content: 'Buy Nexus' },
      { name: 'author', content: 'Christophe Verheyen' },
      {
        name: 'keywords',
        content:
          'nexus, crypto, blockchain, web3, Buy Nexus, chart, exchanges, bittrex, binance, coinstore, usdt, nxs, currency, fiat',
      },
    ]);
    this.setTitle('Nexus - Buy Nexus');
  }

  ngOnInit() {
    this.executeCryptoComScript();
    this.executeTradingViewScript();
    this.executeCryptoHopperScript();
    this.executCoinGekkoScript();
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  private executeCryptoComScript() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      CRYPTO_COM_SCRIPT_PATH
    );
    scriptElement.onload = () => {
      console.log('Crypto.com script loaded');
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Crypto.com script!');
    };
  }

  private executCoinGekkoScript() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      COINGEKKO_SCRIPT_PATH
    );
    scriptElement.onload = () => {
      console.log('Coingekko script loaded');
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Coingekko script!');
    };
  }

  private executeCryptoHopperScript() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      CRYPTOHOPPER_SCRIPT_PATH
    );
    scriptElement.onload = () => {
      console.log('Crypthopper script loaded');
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Crypthopper script!');
    };
  }

  private executeTradingViewScript() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      TRADINGVIEW_SCRIPT_PATH
    );
    scriptElement.onload = () => {
      console.log('Tradingview.com script loaded');

      new TradingView.widget({
        width: 980,
        height: 610,
        symbol: 'BITTREX:NXSUSD',
        interval: 'D',
        timezone: 'exchange',
        theme: 'light',
        style: '3',
        toolbar_bg: '#f1f3f6',
        hide_top_toolbar: true,
        save_image: false,
        locale: 'en',
        container_id: 'tradingview_7b6fc',
      });
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Tradingview script!');
    };
  }
}
