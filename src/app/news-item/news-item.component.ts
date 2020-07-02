import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IBlogPreview } from '../core/api/api.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemComponent implements OnInit {
  @Input() content: IBlogPreview;
  safeBanner: SafeStyle;

  constructor(
    private ref: ChangeDetectorRef,
    private sanitize: DomSanitizer,
    private translate: TranslateService
  ) {
    translate.onLangChange.subscribe(($event) => {
      if (this.content) {
        this.safeBanner = this.sanitize.bypassSecurityTrustStyle(`background-image: url('${this.content.image}');`);
      }
      this.ref.markForCheck();
    });
  }

  ngOnInit() {
    if (this.content) {
      this.safeBanner = this.sanitize.bypassSecurityTrustStyle(`background-image: url('${this.content.image}');`);
    }
    this.ref.markForCheck();
  }

  openDetail() {
    window.open(`https://news.groupclaes.be/${this.content.title[this.culture]}/${this.content.id}`);
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
