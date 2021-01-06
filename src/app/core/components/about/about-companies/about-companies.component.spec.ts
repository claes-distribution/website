import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutCompaniesComponent } from './about-companies.component';

describe('AboutCompaniesComponent', () => {
  let component: AboutCompaniesComponent;
  let fixture: ComponentFixture<AboutCompaniesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
