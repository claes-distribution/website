import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'dis-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  today: Date = new Date();

  constructor(
    private i18nService: I18nService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.ref.markForCheck();
  }

  lang(language: string): void {
    setTimeout(() => {
      this.i18nService.language = language;
    }, 80);
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
