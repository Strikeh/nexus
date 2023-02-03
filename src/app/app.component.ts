import {
  AfterViewInit,
  Component,
  OnInit,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'nexus';
  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/8VZfrwLfwRo'
    );
  }

  ngAfterViewInit = (): void => {
    const safeUrl = this.safeSrc;
    const cachedSanitizer = this.sanitizer;
    const myModal = document.getElementById('staticBackdropLabel');
    const iframe = document.getElementById('nexus-video');

    const sanitizedUrl = cachedSanitizer.sanitize(
      SecurityContext.RESOURCE_URL,
      safeUrl
    );

    $(document).on('show.bs.modal', myModal, function () {
      iframe.setAttribute('src', sanitizedUrl);
    });

    /* Assign empty url value to the iframe src attribute when
    // modal hide, which stop the video playing */
    $(document).on('hidden.bs.modal', myModal, function () {
      iframe.setAttribute('src', '');
    });
  };
}
