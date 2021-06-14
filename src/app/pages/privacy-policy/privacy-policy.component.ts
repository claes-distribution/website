import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss', '../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyPageComponent implements OnInit {
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  acceptPolicy() {
    window.localStorage.setItem('cookiesAccepted', 'yes');
  }

  get policyRequired() {
    return !(window.localStorage.getItem('cookiesAccepted') === 'yes');
  }

  get culture(): string {
    return this.translate.currentLang
  }
}
