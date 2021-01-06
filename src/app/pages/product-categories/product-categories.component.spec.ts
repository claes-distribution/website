import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductCategoriesPageComponent } from './product-categories.component';

describe('ProductCategoriesComponent', () => {
  let component: ProductCategoriesPageComponent;
  let fixture: ComponentFixture<ProductCategoriesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoriesPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
