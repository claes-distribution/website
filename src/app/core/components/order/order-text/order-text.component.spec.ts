import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTextComponent } from './order-text.component';

describe('OrderTextComponent', () => {
  let component: OrderTextComponent;
  let fixture: ComponentFixture<OrderTextComponent>;

  beforeEach(async(() => {
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
