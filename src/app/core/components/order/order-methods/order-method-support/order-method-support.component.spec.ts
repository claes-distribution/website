import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMethodSupportComponent } from './order-method-support.component';

describe('OrderMethodSupportComponent', () => {
  let component: OrderMethodSupportComponent;
  let fixture: ComponentFixture<OrderMethodSupportComponent>;

  beforeEach(async(() => {
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
