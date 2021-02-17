import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularPcmModule } from '@groupclaes/angular-pcm';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/app/core/core.module';

import { ProductsPageComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPageComponent],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        CoreModule,
        AngularPcmModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
