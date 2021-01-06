import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmailDisclaimerPageComponent } from './email-disclaimer.component';

describe('EmailDisclaimerComponent', () => {
  let component: EmailDisclaimerPageComponent;
  let fixture: ComponentFixture<EmailDisclaimerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EmailDisclaimerPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDisclaimerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
