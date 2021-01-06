import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InspireNewsComponent } from './inspire-news.component';

describe('InspireNewsComponent', () => {
  let component: InspireNewsComponent;
  let fixture: ComponentFixture<InspireNewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InspireNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
