import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeafletRecipesComponent } from './home-leaflet-recipes.component';

describe('HomeLeafletRecipesComponent', () => {
  let component: HomeLeafletRecipesComponent;
  let fixture: ComponentFixture<HomeLeafletRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLeafletRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLeafletRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
