import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  today: Date = new Date();

  constructor(
    private translate: TranslateService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.ref.markForCheck();
  }

  lang(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.ref.markForCheck();
  }

  get culture(): string {
    return this.translate.currentLang;
  }

  get languages(): string[] {
    return this.translate.langs;
  }
}
