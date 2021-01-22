import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSubscribeComponent } from './contact-subscribe.component';

describe('ContactSubscribeComponent', () => {
  let component: ContactSubscribeComponent;
  let fixture: ComponentFixture<ContactSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
