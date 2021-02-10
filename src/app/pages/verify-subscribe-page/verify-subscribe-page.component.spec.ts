import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/app/core/core.module';

import { VerifySubscribePageComponent } from './verify-subscribe-page.component';

describe('VerifySubscribePageComponent', () => {
  let component: VerifySubscribePageComponent;
  let fixture: ComponentFixture<VerifySubscribePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifySubscribePageComponent],
      imports: [
        TranslateModule.forRoot(),
        CoreModule,
        FormsModule,
        MatFormFieldModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifySubscribePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
