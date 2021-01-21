import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductsBestSellingComponent } from './products-best-selling.component';

describe('ProductsSpotlightComponent', () => {
  let component: ProductsBestSellingComponent;
  let fixture: ComponentFixture<ProductsBestSellingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsBestSellingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBestSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
