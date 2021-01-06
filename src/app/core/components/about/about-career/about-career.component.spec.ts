import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutCareerComponent } from './about-career.component';

describe('AboutCareerComponent', () => {
  let component: AboutCareerComponent;
  let fixture: ComponentFixture<AboutCareerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
