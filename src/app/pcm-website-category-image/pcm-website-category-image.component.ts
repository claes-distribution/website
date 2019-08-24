import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pcm-website-category-image',
  templateUrl: './pcm-website-category-image.component.html',
  styleUrls: ['./pcm-website-category-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PcmWebsiteCategoryImageComponent implements OnInit {
  @Input() url: string;

  constructor(
    private sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.ref.markForCheck();
  }

  get src(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
