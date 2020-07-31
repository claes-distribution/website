import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspireRecipesLeafletComponent } from './inspire-recipes-leaflet.component';

describe('InspireRecipesLeafletComponent', () => {
  let component: InspireRecipesLeafletComponent;
  let fixture: ComponentFixture<InspireRecipesLeafletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspireRecipesLeafletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireRecipesLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
