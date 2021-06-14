import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-home',
  templateUrl: './home.component.html',
  styleUrls: ['../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  get culture(): string {
    return this.translate.currentLang
  }
}
