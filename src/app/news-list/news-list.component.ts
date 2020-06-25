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
  newsItems: IBlogPreview[];

  constructor(
    private api: ApiService,
    private ref: ChangeDetectorRef,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.api.getNewsList(this.company, 3).subscribe(r => {
      r.blogposts.forEach(blog => {
        blog.image = blog.image.replace('{lang}', this.culture);
        if (blog.ctaText.nl === '') {
          blog.ctaText.nl = 'Lees meer';
        }
        if (blog.ctaText.fr === '') {
          blog.ctaText.fr = 'Lire plus';
        }
      });
      this.newsItems = r.blogposts;
      this.ref.markForCheck();
    });
  }

  get culture(): string {
    return this.translate.currentLang.split('-')[0];
  }
}
