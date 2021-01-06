import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PcmWebsiteLogoComponent } from './pcm-website-logo.component';

describe('PcmWebsiteLogoComponent', () => {
  let component: PcmWebsiteLogoComponent;
  let fixture: ComponentFixture<PcmWebsiteLogoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PcmWebsiteLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmWebsiteLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
