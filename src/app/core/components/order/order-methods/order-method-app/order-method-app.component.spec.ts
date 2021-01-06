import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderMethodAppComponent } from './order-method-app.component';

describe('OrderMethodAppComponent', () => {
  let component: OrderMethodAppComponent;
  let fixture: ComponentFixture<OrderMethodAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMethodAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMethodAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
