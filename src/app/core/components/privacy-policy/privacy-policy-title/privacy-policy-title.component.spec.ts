import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrivacyPolicyTitleComponent } from './privacy-policy-title.component';

describe('PrivacyPolicyTitleComponent', () => {
  let component: PrivacyPolicyTitleComponent;
  let fixture: ComponentFixture<PrivacyPolicyTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
