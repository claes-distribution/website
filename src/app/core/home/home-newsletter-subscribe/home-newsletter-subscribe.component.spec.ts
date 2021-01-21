import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsletterSubscribeComponent } from './home-newsletter-subscribe.component';

describe('HomeNewsletterSubscribeComponent', () => {
  let component: HomeNewsletterSubscribeComponent;
  let fixture: ComponentFixture<HomeNewsletterSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNewsletterSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewsletterSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
