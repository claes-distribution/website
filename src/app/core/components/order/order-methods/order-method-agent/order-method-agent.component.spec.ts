import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderMethodAgentComponent } from './order-method-agent.component';

describe('OrderMethodAgentComponent', () => {
  let component: OrderMethodAgentComponent;
  let fixture: ComponentFixture<OrderMethodAgentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMethodAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMethodAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
