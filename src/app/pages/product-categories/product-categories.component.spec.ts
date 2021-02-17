import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularPcmModule } from '@groupclaes/angular-pcm';
import { TranslateModule } from '@ngx-translate/core';
import { ProductsCategoriesComponent } from 'src/app/core/components/products/products-categories/products-categories.component';

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
        HttpClientModule,
        TranslateModule.forRoot(),
        RouterTestingModule,
        AngularPcmModule
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
