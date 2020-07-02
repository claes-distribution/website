import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsOrderComponent } from './home-products-order.component';

describe('HomeProductsOrderComponent', () => {
  let component: HomeProductsOrderComponent;
  let fixture: ComponentFixture<HomeProductsOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProductsOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
