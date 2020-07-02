import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpotlightProductsComponent } from './home-spotlight-products.component';

describe('HomeSpotlightProductsComponent', () => {
  let component: HomeSpotlightProductsComponent;
  let fixture: ComponentFixture<HomeSpotlightProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSpotlightProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSpotlightProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
