import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pcm-website-banner',
  templateUrl: './pcm-website-banner.component.html',
  styleUrls: ['./pcm-website-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PcmWebsiteBannerComponent implements OnInit {
  @Input() company: string;
  css: SafeStyle;
  private currentSize: string;

  constructor(
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private element: ElementRef,
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
    // initializing logo
    if (this.company) {
      setTimeout(() => {
        this.onResize();
      }, 120);
    }
    this.translate.onLangChange.subscribe(() => {
      console.log('lang change ' + this.culture);
      this.onResize(true);
    });
  }

  onResize(force?: boolean) {
    if (this.company) {
      if (this.element.nativeElement.offsetWidth < 760 && (this.currentSize !== 'small' || force)) {
        this.css = this.sanitizer.bypassSecurityTrustStyle(
          // tslint:disable-next-line: max-line-length
          `background-image:url('https://pcm.groupclaes.be/v3/content/${this.company}/website/banner-image/100/${this.culture}?size=small');`
        );
        this.currentSize = 'small';
        this.ref.markForCheck();
        // tslint:disable-next-line: max-line-length
      } else if (this.element.nativeElement.offsetWidth >= 760 && this.element.nativeElement.offsetWidth < 1140 && (this.currentSize !== 'medium' || force)) {
        this.css = this.sanitizer.bypassSecurityTrustStyle(
          // tslint:disable-next-line: max-line-length
          `background-image:url('https://pcm.groupclaes.be/v3/content/${this.company}/website/banner-image/100/${this.culture}?size=medium');`
        );
        this.currentSize = 'medium';
        this.ref.markForCheck();
      } else if (this.element.nativeElement.offsetWidth >= 1140 && (this.currentSize !== 'large' || force)) {
        this.css = this.sanitizer.bypassSecurityTrustStyle(
          // tslint:disable-next-line: max-line-length
          `background-image:url('https://pcm.groupclaes.be/v3/content/${this.company}/website/banner-image/100/${this.culture}?size=large');`
        );
        this.currentSize = 'large';
        this.ref.markForCheck();
      }
    }
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
