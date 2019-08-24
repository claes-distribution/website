import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmWebsiteCategoryImageSlideshowComponent } from './pcm-website-category-image-slideshow.component';

describe('PcmWebsiteCategoryImageSlideshowComponent', () => {
  let component: PcmWebsiteCategoryImageSlideshowComponent;
  let fixture: ComponentFixture<PcmWebsiteCategoryImageSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcmWebsiteCategoryImageSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmWebsiteCategoryImageSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
