import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurAssetsComponent } from './about-our-assets.component';

describe('AboutOurAssetsComponent', () => {
  let component: AboutOurAssetsComponent;
  let fixture: ComponentFixture<AboutOurAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOurAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
