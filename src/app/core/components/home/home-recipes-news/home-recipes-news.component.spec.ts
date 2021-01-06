import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeRecipesNewsComponent } from './home-recipes-news.component';

describe('HomeRecipesNewsComponent', () => {
  let component: HomeRecipesNewsComponent;
  let fixture: ComponentFixture<HomeRecipesNewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecipesNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecipesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
