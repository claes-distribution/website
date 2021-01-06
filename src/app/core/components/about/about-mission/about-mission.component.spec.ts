import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutMissionComponent } from './about-mission.component';

describe('AboutMissionComponent', () => {
  let component: AboutMissionComponent;
  let fixture: ComponentFixture<AboutMissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
