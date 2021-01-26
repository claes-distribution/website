import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]]
    })
    this.ref.markForCheck()
  }

  submit() {
    console.log(this.subscribeForm.value)
  }
}
