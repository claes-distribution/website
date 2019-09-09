import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line: component-selector
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
    private element: ElementRef
  ) { }

  ngOnInit() {
    // initializing logo
    if (this.company) {
      this.onResize(null);
    }
  }

  onResize(ev: UIEvent) {
    setTimeout(() => {
      if (this.company) {
        if (this.element.nativeElement.offsetWidth < 760 && this.currentSize !== 'small') {
          console.log('small');
          this.css = this.sanitizer.bypassSecurityTrustStyle(
            `background-image: url('https://pcm.groupclaes.be/v2/content/${this.company}/website/banner-image?size=small');`
          );
          this.currentSize = 'small';
          this.ref.markForCheck();
          // tslint:disable-next-line: max-line-length
        } else if (this.element.nativeElement.offsetWidth >= 760 && this.element.nativeElement.offsetWidth < 1140 && this.currentSize !== 'medium') {
          console.log('medium');
          this.css = this.sanitizer.bypassSecurityTrustStyle(
            `background-image: url('https://pcm.groupclaes.be/v2/content/${this.company}/website/banner-image?size=medium');`
          );
          this.currentSize = 'medium';
          this.ref.markForCheck();
        } else if (this.element.nativeElement.offsetWidth >= 1140 && this.currentSize !== 'large') {
          console.log('large');
          this.css = this.sanitizer.bypassSecurityTrustStyle(
            `background-image: url('https://pcm.groupclaes.be/v2/content/${this.company}/website/banner-image?size=large');`
          );
          this.currentSize = 'large';
          this.ref.markForCheck();
        }
      }
    }, 100);
  }
}
