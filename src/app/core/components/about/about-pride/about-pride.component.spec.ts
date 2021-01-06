import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutPrideComponent } from './about-pride.component';

describe('AboutPrideComponent', () => {
  let component: AboutPrideComponent;
  let fixture: ComponentFixture<AboutPrideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
