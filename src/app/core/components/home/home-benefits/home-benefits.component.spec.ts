import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeBenefitsComponent } from './home-benefits.component';

describe('HomeBenefitsComponent', () => {
  let component: HomeBenefitsComponent;
  let fixture: ComponentFixture<HomeBenefitsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
