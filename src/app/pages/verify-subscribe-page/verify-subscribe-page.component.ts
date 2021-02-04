import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dis-verify-subscribe-page',
  templateUrl: './verify-subscribe-page.component.html',
  styleUrls: ['./verify-subscribe-page.component.scss', '../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifySubscribePageComponent implements OnInit {
  verifyForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.verifyForm = this.fb.group({
      acceptPolicy: [false, [Validators.required, Validators.requiredTrue]]
    })
  }

  completeSubscribe(): void {

  }
}
