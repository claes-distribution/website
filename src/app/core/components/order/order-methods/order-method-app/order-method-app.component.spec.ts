import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMethodAppComponent } from './order-method-app.component';

describe('OrderMethodAppComponent', () => {
  let component: OrderMethodAppComponent;
  let fixture: ComponentFixture<OrderMethodAppComponent>;

  beforeEach(async(() => {
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
