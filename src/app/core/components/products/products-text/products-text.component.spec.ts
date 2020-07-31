import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTextComponent } from './products-text.component';

describe('ProductsTextComponent', () => {
  let component: ProductsTextComponent;
  let fixture: ComponentFixture<ProductsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
