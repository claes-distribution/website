import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularPcmModule } from '@groupclaes/angular-pcm';
import { TranslateModule } from '@ngx-translate/core';
import { CategoriesService } from 'src/app/core/data/categories.service';

import { ProductsCategoriesComponent } from './products-categories.component';

// declare gtag as a function to access the JS code in TS
declare let gtag: Function;

describe('ProductsCategoriesComponent', () => {
  let component: ProductsCategoriesComponent;
  let fixture: ComponentFixture<ProductsCategoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCategoriesComponent],
      providers: [
        CategoriesService,
      ],
      imports: [
        HttpClientModule,
        AngularPcmModule,
        TranslateModule.forRoot(),
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
