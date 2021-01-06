import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactOpeningHoursComponent } from './contact-opening-hours.component';

describe('ContactOpeningHoursComponent', () => {
  let component: ContactOpeningHoursComponent;
  let fixture: ComponentFixture<ContactOpeningHoursComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactOpeningHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactOpeningHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
