import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InspireRecipesLeafletComponent } from './inspire-recipes-leaflet.component';

describe('InspireRecipesLeafletComponent', () => {
  let component: InspireRecipesLeafletComponent;
  let fixture: ComponentFixture<InspireRecipesLeafletComponent>;

  beforeEach(waitForAsync(() => {
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
