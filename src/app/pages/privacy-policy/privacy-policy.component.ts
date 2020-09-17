import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  acceptPolicy() {
    window.localStorage.setItem('cookiesAccepted', 'yes');
  }

  get policyRequired() {
    return !(window.localStorage.getItem('cookiesAccepted') === 'yes');
  }
}
