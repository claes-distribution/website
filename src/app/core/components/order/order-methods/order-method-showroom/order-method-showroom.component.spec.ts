import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMethodShowroomComponent } from './order-method-showroom.component';

describe('OrderMethodShowroomComponent', () => {
  let component: OrderMethodShowroomComponent;
  let fixture: ComponentFixture<OrderMethodShowroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMethodShowroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMethodShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
