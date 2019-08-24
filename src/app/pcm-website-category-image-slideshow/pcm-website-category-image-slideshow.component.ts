import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pcm-website-category-image-slideshow',
  templateUrl: './pcm-website-category-image-slideshow.component.html',
  styleUrls: ['./pcm-website-category-image-slideshow.component.scss']
})
export class PcmWebsiteCategoryImageSlideshowComponent implements OnInit {
  @Input() images: any[];

  constructor() { }

  ngOnInit() {
  }

}
