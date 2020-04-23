import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pcm-website-category-image-slideshow',
  templateUrl: './pcm-website-category-image-slideshow.component.html',
  styleUrls: ['./pcm-website-category-image-slideshow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PcmWebsiteCategoryImageSlideshowComponent implements OnInit, OnDestroy, OnChanges {
  @Input() images: string[];
  currentIndex = 0;
  showError = false;
  observer: Subscription;
  key: any;

  constructor(
    private ref: ChangeDetectorRef
  ) {
    const result = (Math.random().toString(36).substr(2, 5).toString());
    this.key = result;
  }

  ngOnInit() {
    setTimeout(() => {
      this.currentIndex = 0;
      this.updateImage();
    }, 120);
  }

  ngOnChanges() {
    if (this.images && this.images.length > 0) {
      this.currentIndex = 0;
      if (this.observer) {
        this.observer.unsubscribe();
      }

      setTimeout(() => {
        this.currentIndex = 0;
        this.updateImage();
      }, 120);

      if (this.images.length > 1) {
        const sub = interval(2500);
        this.observer = sub.subscribe(x => {
          this.updateHideImage();
          if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
            this.updateImage();
          } else {
            this.currentIndex = 0;
            this.updateImage();
          }
        });
      }
    } else {
      this.showError = true;
    }
    this.ref.markForCheck();
  }

  ngOnDestroy() {
    if (this.observer && !this.observer.closed) {
      this.observer.unsubscribe();
    }
  }

  private getElement(id: string): HTMLElement | null {
    const element = document.getElementById(id);
    return element ? element : null;
  }

  private updateImage() {
    // console.log('updateImage() -- ' + this.key);
    try {
      this.getElement(`image-${this.key}-${this.currentIndex}`).style.display = 'block';
      this.ref.markForCheck();
    } catch {

    }
  }

  private updateHideImage() {
    try {
      this.images.forEach((_, i) => {
        this.getElement(`image-${this.key}-${i}`).style.display = 'none';
        this.ref.markForCheck();
      });
    } catch { }
  }

  ImageId(index: number) {
    return `image-${this.key}-${index}`;
  }
}
