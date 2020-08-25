import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApiService, IBlogPreview } from '../core/api/api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit {
  @Input() company: string;
  newsList: IBlogPreview[] = [];
  currentIndex = 0;

  constructor(
    private api: ApiService,
    private ref: ChangeDetectorRef,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.api.getNewsList(this.company, 10).subscribe(r => {
      r.blogposts.forEach(blog => {
        blog.image = blog.image.replace('{lang}', this.culture);
        if (blog.ctaText.nl === '') {
          blog.ctaText.nl = 'Lees meer';
        }
        if (blog.ctaText.fr === '') {
          blog.ctaText.fr = 'Lire plus';
        }
      });
      this.newsList = r.blogposts;
      this.ref.markForCheck();
    });
  }

  newsHref(news: IBlogPreview): string {
    if (news.ctaHref) {
      return news.ctaHref.replace('{lang}', this.culture);
    } else {
      return `https://news.groupclaes.be/${news.title[this.culture]}/${news.id}`;
    }
  }

  get culture(): string {
    return this.translate.currentLang.split('-')[0];
  }

  previous() {
    if (this.currentIndex >= 1) {
      this.currentIndex--;
      this.ref.markForCheck();
    }
  }

  next() {
    if (this.currentIndex < this.newsList.length - 3) {
      this.currentIndex++;
      this.ref.markForCheck();
    }
  }

  get previousEnabled(): boolean {
    return this.newsList && this.currentIndex > 0;
  }

  get nextEnabled(): boolean {
    return this.newsList && this.currentIndex < this.newsList.length - 3;
  }
}
