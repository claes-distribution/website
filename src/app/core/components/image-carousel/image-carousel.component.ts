import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CultureEntry } from '../../api/api.service';

@Component({
  selector: 'dis-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  @Input() slides: ImageSlide[];
  private currentSize: string;
  currentIndex: number;

  private sub: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private element: ElementRef,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    if (this.slides && this.slideCount > 0) {
      this.currentIndex = 0;
      if (this.slideCount > 1) {
        // start interval

        this.sub = interval(4500).subscribe($i => {
          if (this.currentIndex < this.slideCount - 1) {
            this.currentIndex++;
          } else {
            this.currentIndex = 0;
          }
          this.ref.markForCheck();
        });
      }

      setTimeout(() => {
        this.onResize(null);
      }, 120);
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onResize(ev: UIEvent) {
    if (this.element.nativeElement.offsetWidth < 760 && this.currentSize !== 'small') {
      this.currentSize = 'small';
      // tslint:disable-next-line: max-line-length
    } else if (this.element.nativeElement.offsetWidth >= 760 && this.element.nativeElement.offsetWidth < 1140 && this.currentSize !== 'medium') {
      this.currentSize = 'medium';
    } else if (this.element.nativeElement.offsetWidth >= 1140 && this.currentSize !== 'large') {
      this.currentSize = 'large';
    }
    this.ref.markForCheck();
  }

  selectIndex(index: number) {
    this.currentIndex = index;
    this.onResize(null);

    if (this.sub) {
      this.sub.unsubscribe();

      this.sub = interval(4500).subscribe($i => {
        if (this.currentIndex < this.slideCount - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
        this.ref.markForCheck();
      });
    }
  }

  get css(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `url('${this.url}?size=${this.currentSize}')`
    );
  }

  get title(): string {
    return this.slides[this.currentIndex].title[this.culture];
  }

  private get url(): string {
    return this.slides[this.currentIndex].url;
  }

  get slideCount(): number {
    return this.slides && this.slides.length;
  }

  private get culture(): string {
    return this.translate.currentLang;
  }
}

export interface ImageSlide {
  url: string;
  title: CultureEntry;
}
