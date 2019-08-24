import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStrategyComponent } from './about-strategy.component';

describe('AboutStrategyComponent', () => {
  let component: AboutStrategyComponent;
  let fixture: ComponentFixture<AboutStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
