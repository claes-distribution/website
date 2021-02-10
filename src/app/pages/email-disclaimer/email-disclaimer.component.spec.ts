import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/app/core/core.module';

import { EmailDisclaimerPageComponent } from './email-disclaimer.component';

describe('EmailDisclaimerComponent', () => {
  let component: EmailDisclaimerPageComponent;
  let fixture: ComponentFixture<EmailDisclaimerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EmailDisclaimerPageComponent],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        CoreModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDisclaimerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
