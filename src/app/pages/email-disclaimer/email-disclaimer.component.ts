import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-email-disclaimer',
  templateUrl: './email-disclaimer.component.html',
  styleUrls: ['./email-disclaimer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailDisclaimerPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
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
    this.translate.use(language);
    this.ref.markForCheck();
  }
}
