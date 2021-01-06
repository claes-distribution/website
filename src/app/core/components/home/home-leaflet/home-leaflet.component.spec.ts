import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeLeafletComponent } from './home-leaflet.component';

describe('HomeLeafletComponent', () => {
  let component: HomeLeafletComponent;
  let fixture: ComponentFixture<HomeLeafletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLeafletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
