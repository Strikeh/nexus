import { AfterViewInit, Component } from '@angular/core';
import {
  fadeInUpAnimation,
  fadeInDownAnimation,
  bounceInUpOnEnterAnimation,
  bounceInUpAnimation,
  expandOnEnterAnimation,
  bounceInOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-resource-hub',
  templateUrl: './resource-hub.component.html',
  styleUrls: ['./resource-hub.component.scss'],
  animations: [
    fadeInUpAnimation(),
    fadeInDownAnimation(),
    bounceInUpAnimation(),
    expandOnEnterAnimation({ duration: 200 }),
    bounceInOnEnterAnimation(),
  ],
})
export class ResourceHubComponent implements AfterViewInit {
  animationState = false;
  qrAnimationState = false;

  url = './../../assets/js/particles.js';

  constructor() {}

  ngAfterViewInit(): void {
    this.loadScript(this.url);
    this.animate();
  }

  public loadScript(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  scrollToTag(event: Event, tag: string) {
    document.getElementById(tag).scrollIntoView({ behavior: 'smooth' });
    event.preventDefault();
  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }

  onAppearQR() {
    this.qrAnimationState = true;
  }
}
