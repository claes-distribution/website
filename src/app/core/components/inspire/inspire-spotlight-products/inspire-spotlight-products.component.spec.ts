import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspireSpotlightProductsComponent } from './inspire-spotlight-products.component';

describe('InspireSpotlightProductsComponent', () => {
  let component: InspireSpotlightProductsComponent;
  let fixture: ComponentFixture<InspireSpotlightProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspireSpotlightProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireSpotlightProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
