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
  currentImageUrl: string;
  nextImageUrl: string;
  currentIndex: number;
  showError = false;
  observer: Subscription;

  constructor(
    private ref: ChangeDetectorRef
  ) {
  }

  ngOnInit() { }

  ngOnChanges() {
    if (this.images && this.images.length > 0) {
      this.currentIndex = 0;
      if (this.observer) {
        this.observer.unsubscribe();
      }
      this.currentIndex = 0;
      this.updateImage();

      if (this.images.length > 1) {
        const sub = interval(2500);
        this.observer = sub.subscribe(x => {
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

  updateImage() {
    this.currentImageUrl = this.images[this.currentIndex];
    this.ref.markForCheck();
  }
}
