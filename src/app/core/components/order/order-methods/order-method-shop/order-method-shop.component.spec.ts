import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderMethodShopComponent } from './order-method-shop.component';

describe('OrderMethodShopComponent', () => {
  let component: OrderMethodShopComponent;
  let fixture: ComponentFixture<OrderMethodShopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMethodShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMethodShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
