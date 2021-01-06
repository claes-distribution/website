import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderMethodSupportComponent } from './order-method-support.component';

describe('OrderMethodSupportComponent', () => {
  let component: OrderMethodSupportComponent;
  let fixture: ComponentFixture<OrderMethodSupportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMethodSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMethodSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
