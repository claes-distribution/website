import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductsSpotlightComponent } from './products-spotlight.component';

describe('ProductsSpotlightComponent', () => {
  let component: ProductsSpotlightComponent;
  let fixture: ComponentFixture<ProductsSpotlightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSpotlightComponent ]
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
