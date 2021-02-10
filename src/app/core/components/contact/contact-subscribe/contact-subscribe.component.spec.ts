import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';

import { ContactSubscribeComponent } from './contact-subscribe.component';

describe('ContactSubscribeComponent', () => {
  let component: ContactSubscribeComponent;
  let fixture: ComponentFixture<ContactSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSubscribeComponent],
      imports: [
        TranslateModule.forRoot(),
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule
      ]
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
