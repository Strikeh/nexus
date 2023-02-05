import {
  AfterViewInit,
  Component,
  OnInit,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit {
  title = 'nexus';
  safeSrc: SafeResourceUrl;
  isUrlInitialValue = true;

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/8VZfrwLfwRo'
    );
  }

  navigateToTeam(): void {
    this.router.navigate(['/team']);
  }

  ngAfterViewInit(): void {
    const safeUrl = this.safeSrc;
    const cachedSanitizer = this.sanitizer;
    const myModal = document.getElementById('staticBackdropLabel');
    const iframe = document.getElementById('nexus-video');
    let isUrlInitialValue = this.isUrlInitialValue;

    const sanitizedUrl = cachedSanitizer.sanitize(
      SecurityContext.RESOURCE_URL,
      safeUrl
    );

    $(document).on('show.bs.modal', myModal, function () {
      if (!isUrlInitialValue) {
        iframe.setAttribute('src', sanitizedUrl);
      }
    });

    /* Assign empty url value to the iframe src attribute when
    // modal hide, which stop the video playing */
    $(document).on('hidden.bs.modal', myModal, function () {
      iframe.setAttribute('src', '');
      isUrlInitialValue = false;
    });
  }
}
