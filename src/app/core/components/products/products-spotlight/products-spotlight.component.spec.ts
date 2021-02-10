import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SpotlightProductsService } from 'src/app/core/data/spotlight.service';

import { ProductsSpotlightComponent } from './products-spotlight.component';

describe('ProductsSpotlightComponent', () => {
  let component: ProductsSpotlightComponent;
  let fixture: ComponentFixture<ProductsSpotlightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsSpotlightComponent],
      providers: [
        SpotlightProductsService
      ],
      imports: [
        TranslateModule.forRoot(),
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
