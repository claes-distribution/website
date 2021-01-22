import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
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
  @Input() slides: ImageSlide[]
  private currentSize: string
  currentIndex: number
  timeout: number

  constructor(
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    if (this.slides && this.slideCount > 0) {
      this.currentIndex = 0;
      if (this.slideCount > 1) {
        this.startRotation(true)
      }
    }
  }

  ngOnDestroy() {
    if (this.timeout) {
      window.clearTimeout(this.timeout)
    }
  }

  startRotation(fixResize?: boolean) {
    // check timeout on current slide
    const timeout = this.slides[this.currentIndex].duration | 4500
    if (fixResize) {
      this.onResize()
    }

    this.timeout = window.setTimeout(() => {
      if (this.currentIndex < this.slideCount - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
      this.startRotation()
      this.ref.markForCheck()
    }, timeout)
  }

  onResize() {
    if (window.innerWidth < 760 && this.currentSize !== 'small') {
      this.currentSize = 'small'
    } else if (window.innerWidth >= 760 && window.innerWidth < 1140 && this.currentSize !== 'medium') {
      this.currentSize = 'medium'
    } else if (window.innerWidth >= 1140 && this.currentSize !== 'large') {
      this.currentSize = 'large'
    }
    this.ref.markForCheck()
  }

  selectIndex(index: number) {
    this.currentIndex = index
    this.onResize()

    if (this.timeout) {
      window.clearTimeout(this.timeout)
    }

    this.startRotation()
  }

  open() {
    // check if current slide has a href
    const href = this.slides[this.currentIndex].href
    if (href) {
      window.open(href, '_blank');
    }
  }

  get css(): SafeStyle {
    if (this.url.indexOf('https://pcm.groupclaes.be/v3/content') === 0) {
      return this.sanitizer.bypassSecurityTrustStyle(
        `url('${this.url}/${this.culture}?size=${this.currentSize}')`
      )
    }
    return this.sanitizer.bypassSecurityTrustStyle(
      `url('${this.url}?size=${this.currentSize}')`
    )
  }

  get title(): string {
    return this.slides[this.currentIndex].title[this.culture]
  }

  private get url(): string {
    return this.slides[this.currentIndex].url
  }

  get slideCount(): number {
    return this.slides && this.slides.length
  }

  private get culture(): string {
    return this.translate.currentLang
  }
}

export interface ImageSlide {
  url: string
  title: CultureEntry
  href?: string | null
  duration?: number
}
