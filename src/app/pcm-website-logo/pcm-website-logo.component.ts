import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pcm-website-logo',
  templateUrl: './pcm-website-logo.component.html',
  styleUrls: ['./pcm-website-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PcmWebsiteLogoComponent implements OnInit {
  @Input() company: string;
  @Input() id: string = '100';

  constructor(private ref: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // initializing logo
    if (this.company) {
      this.ref.markForCheck();
    }
  }

  get url(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`https://pcm.groupclaes.be/v2/content/${this.company}/website/logo/${this.id}`);
  }
}
