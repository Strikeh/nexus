import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements AfterViewInit {
  ngOnInit() {}

  ngAfterViewInit(): void {
    var $content_popup = $('.content-popup');
    var $body = $('body');

    if ((<any>$content_popup).exists()) {
      $content_popup.each(function () {
        var overlay = $(this).data('overlay');
        var setOverlay =
          typeof overlay !== 'undefined' && overlay ? overlay : '';
        (<any>$(this)).magnificPopup({
          type: 'inline',
          preloader: true,
          removalDelay: 400,
          mainClass: 'mfp-fade content-popup ' + setOverlay,
          callbacks: {
            open: function () {
              $body.addClass('mfp-opened');
            },
            close: function () {
              $body.removeClass('mfp-opened');
            },
          },
        });
      });
    }
  }
}
