import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PagerService } from 'src/app/services/pager.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class VideosComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private readonly pagerService: PagerService
  ) {}

  // array of all items to be paged
  private videos: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    // get dummy data
    this.http
      .get('/assets/data/videos.json')
      // .pipe(map((response: Response) => response.json()))
      .subscribe((data: any) => {
        // set items to json response
        this.videos = data;

        // initialize to page 1
        this.setPage(1);
      });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.videos.length, page);

    // get current page of items
    this.pagedItems = this.videos.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
}
