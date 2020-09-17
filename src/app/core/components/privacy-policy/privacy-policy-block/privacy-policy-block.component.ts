import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-privacy-policy-block',
  templateUrl: './privacy-policy-block.component.html',
  styleUrls: ['./privacy-policy-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyBlockComponent implements OnInit {
  @Input() section: string;

  constructor() { }

  ngOnInit(): void {
  }

  get title(): string {
    return `components.privacy-policy.privacy-policy-blocks.${this.section}.title`;
  }

  get text(): string {
    return `components.privacy-policy.privacy-policy-blocks.${this.section}.text`;
  }
}
