import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  AfterViewChecked,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { PagerService } from 'src/app/services/pager.service';
import 'magnific-popup';
import { map } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class VideosComponent implements OnInit, AfterViewChecked {
  @ViewChild('videos') videosDiv: ElementRef;

  activeCategory = '';

  constructor(
    private http: HttpClient,
    private readonly pagerService: PagerService
  ) {}

  ngAfterViewChecked(): void {
    const popups = document.querySelectorAll('a.video-popup');

    popups.forEach((popup) => {
      (<any>$(popup)).magnificPopup({
        type: 'iframe',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false,
        callbacks: {
          beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace(
              'mfp-figure',
              'mfp-figure mfp-with-anim'
            );
            this.st.mainClass = this.st.el.attr('data-effect');
          },
        },
      });
    });
  }

  // array of all items to be paged
  private videos: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    // get videos
    this.http.get('/assets/data/videos.json').subscribe((data: any) => {
      // set items to json response
      this.videos = data;

      // initialize to page 1
      this.setPage(1, null);
    });
  }

  filterCategory(category: string, event: any): void {
    this.activeCategory = category;

    this.http
      .get('/assets/data/videos.json')
      .pipe(
        map((videos: Object[]) =>
          videos.filter((video) => video['category'] === category)
        )
      )
      .subscribe((data: any) => {
        // set items to json response
        this.videos = data;

        // initialize to page 1
        this.setPage(1, null);
      });

    event.preventDefault();
  }

  setPage = (page: number, event: any) => {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.videos.length, page);

    // get current page of items
    this.pagedItems = this.videos.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );

    if (event) {
      const id = 'videos';
      const yOffset = -100;
      const element = document.getElementById(id);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      event.preventDefault();
    }
  };
}
