import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderMethodsComponent } from './order-methods.component';

describe('OrderMethodsComponent', () => {
  let component: OrderMethodsComponent;
  let fixture: ComponentFixture<OrderMethodsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
