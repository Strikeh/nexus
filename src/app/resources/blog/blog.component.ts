import { PagerService } from '../../services/pager.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BlogComponent implements OnInit {
  activeCategory = '';

  constructor(
    private http: HttpClient,
    private readonly pagerService: PagerService
  ) {}

  // array of all items to be paged
  private articles: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    // get dummy data
    this.http
      .get('/assets/data/articles.json')
      // .pipe(map((response: Response) => response.json()))
      .subscribe((data: any) => {
        // set items to json response
        this.articles = data;

        // initialize to page 1
        this.setPage(1, null);
      });
  }

  filterCategory(category: string, event: any): void {
    this.activeCategory = category;

    this.http
      .get('/assets/data/articles.json')
      .pipe(
        map((articles: Object[]) =>
          articles.filter((article) => article['category'] === category)
        )
      )
      .subscribe((data: any) => {
        // set items to json response
        this.articles = data;

        // initialize to page 1
        this.setPage(1, null);
      });

    event.preventDefault();
  }

  setPage = (page: number, event: any) => {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.articles.length, page);

    // get current page of items
    this.pagedItems = this.articles.slice(
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
