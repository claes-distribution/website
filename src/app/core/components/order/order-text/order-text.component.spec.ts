import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderTextComponent } from './order-text.component';

describe('OrderTextComponent', () => {
  let component: OrderTextComponent;
  let fixture: ComponentFixture<OrderTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
