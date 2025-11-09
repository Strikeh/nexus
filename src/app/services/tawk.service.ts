import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TawkService {
  private loaded = false;

  constructor() {}

  loadTawkTo(): void {
    if (this.loaded) {
      return;
    }

    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];

    s1.async = true;
    s1.src = 'https://embed.tawk.to/5e41bb65298c395d1ce737f7/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }

    this.loaded = true;
  }
}
