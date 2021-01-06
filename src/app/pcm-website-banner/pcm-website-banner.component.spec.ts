import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PcmWebsiteBannerComponent } from './pcm-website-banner.component';

describe('PcmWebsiteBannerComponent', () => {
  let component: PcmWebsiteBannerComponent;
  let fixture: ComponentFixture<PcmWebsiteBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PcmWebsiteBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmWebsiteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
