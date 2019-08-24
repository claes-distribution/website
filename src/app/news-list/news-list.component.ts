import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApiService, NewsItem } from '../core/api/api.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit {
  @Input() company: string;
  newsItems: NewsItem[];

  constructor(
    private api: ApiService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.api.getNewsList(this.company, 3).subscribe(items => {
      if (items) {
        this.newsItems = items;
        this.ref.markForCheck();
      } else {
        console.error('yeet');
      }
    });
  }
}
