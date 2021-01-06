import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderMethodEdiComponent } from './order-method-edi.component';

describe('OrderMethodEdiComponent', () => {
  let component: OrderMethodEdiComponent;
  let fixture: ComponentFixture<OrderMethodEdiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMethodEdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMethodEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
