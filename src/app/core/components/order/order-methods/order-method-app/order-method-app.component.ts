import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-order-method-app',
  templateUrl: './order-method-app.component.html',
  styleUrls: ['../order-method-shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderMethodAppComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
