import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { SubscribersService } from 'src/app/core/api/subscribers.service';

import { ContactSubscribeComponent } from './contact-subscribe.component';

describe('ContactSubscribeComponent', () => {
  let component: ContactSubscribeComponent;
  let fixture: ComponentFixture<ContactSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSubscribeComponent],
      providers: [
        SubscribersService
      ],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule
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
