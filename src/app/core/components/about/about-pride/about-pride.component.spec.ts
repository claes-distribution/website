import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPrideComponent } from './about-pride.component';

describe('AboutPrideComponent', () => {
  let component: AboutPrideComponent;
  let fixture: ComponentFixture<AboutPrideComponent>;

  beforeEach(async(() => {
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
