import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { OrderMethodsComponent } from './order-methods.component';
import { OrderMethodsModule } from './order-methods.module';

describe('OrderMethodsComponent', () => {
  let component: OrderMethodsComponent;
  let fixture: ComponentFixture<OrderMethodsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderMethodsComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        OrderMethodsModule
      ]
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
