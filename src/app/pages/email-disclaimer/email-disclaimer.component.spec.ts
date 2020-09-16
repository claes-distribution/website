import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDisclaimerPageComponent } from './email-disclaimer.component';

describe('EmailDisclaimerComponent', () => {
  let component: EmailDisclaimerPageComponent;
  let fixture: ComponentFixture<EmailDisclaimerPageComponent>;

  beforeEach(async(() => {
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
