import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ProductsCategoriesComponent } from 'src/app/core/components/products/products-categories/products-categories.component';
import { CoreModule } from 'src/app/core/core.module';

import { ProductCategoriesPageComponent } from './product-categories.component';

describe('ProductCategoriesComponent', () => {
  let component: ProductCategoriesPageComponent;
  let fixture: ComponentFixture<ProductCategoriesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductCategoriesPageComponent,
        ProductsCategoriesComponent
      ],
      imports: [
        TranslateModule.forRoot(),
      ]
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
