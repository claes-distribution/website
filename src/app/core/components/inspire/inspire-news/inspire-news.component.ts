import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BlogpostsService, IBlogPreview } from 'src/app/core/data/blogposts.service';

@Component({
  selector: 'dis-inspire-news',
  templateUrl: './inspire-news.component.html',
  styleUrls: ['./inspire-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspireNewsComponent implements OnInit {
  newsList: IBlogPreview[];
  currentBlog: IBlogPreview;

  constructor(
    private translate: TranslateService,
    private blogpostService: BlogpostsService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.blogpostService.get().subscribe(r => {
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

    this.translate.onLangChange.subscribe(() => {
      this.ref.markForCheck();
    });
  }

  newsHref(url: string): string {
    return url.replace('{lang}', this.culture);
  }

  open(blog: IBlogPreview, $event: any) {
    this.currentBlog = blog;
    $event.preventDefault();
    this.ref.markForCheck();
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.currentBlog = undefined;
    this.ref.markForCheck();
    document.body.style.overflow = 'initial';
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
