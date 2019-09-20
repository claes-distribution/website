import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'dis-email-disclaimer',
  templateUrl: './email-disclaimer.component.html',
  styleUrls: ['./email-disclaimer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailDisclaimerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private i18nService: I18nService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.language) {
        this.lang(params.language);
      }
    });
  }

  lang(language: string): void {
    this.i18nService.language = language;
    this.ref.markForCheck();
  }
}
