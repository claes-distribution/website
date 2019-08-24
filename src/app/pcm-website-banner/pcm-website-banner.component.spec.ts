import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmWebsiteBannerComponent } from './pcm-website-banner.component';

describe('PcmWebsiteBannerComponent', () => {
  let component: PcmWebsiteBannerComponent;
  let fixture: ComponentFixture<PcmWebsiteBannerComponent>;

  beforeEach(async(() => {
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
