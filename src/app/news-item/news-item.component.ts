import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { NewsItem } from '../core/api/api.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { I18nService } from '../core/i18n.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemComponent implements OnInit {
  @Input() content: NewsItem;
  safeBanner: SafeStyle;

  constructor(
    private ref: ChangeDetectorRef,
    private sanitize: DomSanitizer,
    private i18nService: I18nService,
    translate: TranslateService
  ) {
    translate.onLangChange.subscribe(($event) => {
      if (this.content) {
        const banner = this.content.banner.replace('{lang}', this.culture);
        this.safeBanner = this.sanitize.bypassSecurityTrustStyle(`background-image: url('${banner}');`);
      }
      this.ref.markForCheck();
    });
  }

  ngOnInit() {
    if (this.content) {
      const banner = this.content.banner.replace('{lang}', this.culture);
      this.safeBanner = this.sanitize.bypassSecurityTrustStyle(`background-image: url('${banner}');`);
    }
    this.ref.markForCheck();
  }

  openDetail() {
    window.open(`https://news.groupclaes.be/${this.content.id}/${this.content['title' + this.culture.toUpperCase()]}`);
  }

  get culture(): string {
    return this.i18nService.language.split('-')[0];
  }
}
