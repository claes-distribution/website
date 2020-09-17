import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyBlockComponent } from './privacy-policy-block.component';

describe('PrivacyPolicyBlockComponent', () => {
  let component: PrivacyPolicyBlockComponent;
  let fixture: ComponentFixture<PrivacyPolicyBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
