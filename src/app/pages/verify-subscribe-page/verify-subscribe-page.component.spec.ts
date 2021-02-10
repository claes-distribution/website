import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRouteStub } from 'src/app/app-routing.mock';
import { CoreModule } from 'src/app/core/core.module';

import { VerifySubscribePageComponent } from './verify-subscribe-page.component';

describe('VerifySubscribePageComponent', () => {
  let component: VerifySubscribePageComponent;
  let fixture: ComponentFixture<VerifySubscribePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifySubscribePageComponent],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        CommonModule,
        ReactiveFormsModule,
        CoreModule,
        FormsModule,
        MatFormFieldModule
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifySubscribePageComponent);
    component = fixture.componentInstance;
    const activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    // activatedRoute.testParamMap = { category: 'api-02' };
    activatedRoute.testQueryParamMap = { hash: '9a90d51661b06557798c9a55294626042996958' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(`should have h1 text with content 'Bijna klaar: bevestig je inschrijving'`, async () => {
  //   const fixture = TestBed.createComponent(VerifySubscribePageComponent)
  //   fixture.detectChanges()
  //   const compiled = fixture.debugElement.nativeElement
  //   await fixture.whenRenderingDone()

  //   expect(compiled.querySelector('h1').textContent).toEqual('Bijna klaar: bevestig je inschrijving')
  // })
});
