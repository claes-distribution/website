import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SubscribersService } from 'src/app/core/api/subscribers.service';

@Component({
  selector: 'dis-contact-subscribe',
  templateUrl: './contact-subscribe.component.html',
  styleUrls: ['./contact-subscribe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSubscribeComponent implements OnInit {
  subscribeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ref: ChangeDetectorRef,
    private subscribersService: SubscribersService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]]
    })
    this.ref.markForCheck()
  }

  submit() {
    let title = this.translate.instant(`components.contact.contact-subscribe.messages.success.title`)
    let message = this.translate.instant(`components.contact.contact-subscribe.messages.success.message`)

    this.subscribersService.post(this.subscribeForm.value).subscribe(response => {
      console.log(response)
      if (response) {
        alert(`${title.toUpperCase()}\n\n${message}`)
      }
    }, err => {
      if (err) {
        if (err.status) {
          switch (err.status) {
            case 400:
              title = this.translate.instant(`components.contact.contact-subscribe.messages.${err.error.reason}.title`)
              message = this.translate.instant(`components.contact.contact-subscribe.messages.${err.error.reason}.message`)
              alert(`${title.toUpperCase()}\n\n${message}`)
              return
          }
        }
      }
      alert(err.message)
    })
  }
}
