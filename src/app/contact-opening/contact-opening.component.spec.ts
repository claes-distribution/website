import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOpeningComponent } from './contact-opening.component';

describe('ContactOpeningComponent', () => {
  let component: ContactOpeningComponent;
  let fixture: ComponentFixture<ContactOpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactOpeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
