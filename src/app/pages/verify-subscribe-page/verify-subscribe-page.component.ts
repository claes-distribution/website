import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ISubscriber, SubscribersService } from 'src/app/core/api/subscribers.service';

@Component({
  selector: 'dis-verify-subscribe-page',
  templateUrl: './verify-subscribe-page.component.html',
  styleUrls: ['./verify-subscribe-page.component.scss', '../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifySubscribePageComponent implements OnInit {
  verifyForm: FormGroup
  subscriber: ISubscriber
  hash: string

  constructor(
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private subscribersService: SubscribersService,
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.verifyForm = this.fb.group({
      personalName: [''],
      personalSurname: [''],
      personalCompany: [''],
      personalPhone: [''],
      acceptedOptInTerms: [false, [Validators.required, Validators.requiredTrue]]
    })

    this.route.params.subscribe(params => {
      this.hash = params['hash']

      this.subscribersService.get(this.hash).subscribe(response => {
        this.subscriber = response.subscriber

        this.verifyForm.controls.personalName.setValue(this.subscriber.personalName)
        this.verifyForm.controls.personalSurname.setValue(this.subscriber.personalSurname)
        this.verifyForm.controls.personalCompany.setValue(this.subscriber.personalCompany)
        this.verifyForm.controls.personalPhone.setValue(this.subscriber.personalPhone)
        this.verifyForm.controls.acceptedOptInTerms.setValue(this.subscriber.acceptedOptInTerms)

        this.ref.markForCheck()
      })
    })
  }

  completeSubscribe(): void {
    if (this.verifyForm.valid) {
      const formValue = this.verifyForm.value

      const newSub: ISubscriber = {
        ...this.subscriber,
        ...formValue
      }

      newSub.optInOn = new Date()
      newSub.optInMethod = 'form_checkbox'
      newSub.optInTerms = 'twice_monthly'

      this.subscribersService.update(this.hash, newSub).subscribe(r => {
        if (r.result) {
          if (this.culture === 'nl') {
            alert('Bedankt om je inschrijving te bevestigen.')
          } else {
            alert('Bedankt om je inschrijving te bevestigen.')
          }
          this.router.navigate(['/'])
        } else {
          alert(r.reason)
        }
      })
    } else {
      alert('form invalid!')
    }
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
