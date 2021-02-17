import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BestSellingProductsService } from 'src/app/core/data/best-selling.service';

import { ProductsBestSellingComponent } from './products-best-selling.component';

// declare gtag as a function to access the JS code in TS
declare let gtag: Function;

describe('ProductsSpotlightComponent', () => {
  let component: ProductsBestSellingComponent;
  let fixture: ComponentFixture<ProductsBestSellingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsBestSellingComponent],
      providers: [
        BestSellingProductsService
      ],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot()
      ]
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
