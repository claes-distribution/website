import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-privacy-policy-title',
  templateUrl: './privacy-policy-title.component.html',
  styleUrls: ['./privacy-policy-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyTitleComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
