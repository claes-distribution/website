import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyTitleComponent } from './privacy-policy-title.component';

describe('PrivacyPolicyTitleComponent', () => {
  let component: PrivacyPolicyTitleComponent;
  let fixture: ComponentFixture<PrivacyPolicyTitleComponent>;

  beforeEach(async(() => {
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
