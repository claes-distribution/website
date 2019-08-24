import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServiceSupportComponent } from './about-service-support.component';

describe('AboutServiceSupportComponent', () => {
  let component: AboutServiceSupportComponent;
  let fixture: ComponentFixture<AboutServiceSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutServiceSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutServiceSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
