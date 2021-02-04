import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySubscribePageComponent } from './verify-subscribe-page.component';

describe('VerifySubscribePageComponent', () => {
  let component: VerifySubscribePageComponent;
  let fixture: ComponentFixture<VerifySubscribePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifySubscribePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifySubscribePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
