import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCareerComponent } from './about-career.component';

describe('AboutCareerComponent', () => {
  let component: AboutCareerComponent;
  let fixture: ComponentFixture<AboutCareerComponent>;

  beforeEach(async(() => {
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
