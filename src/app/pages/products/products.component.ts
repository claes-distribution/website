import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-products',
  templateUrl: './products.component.html',
  styleUrls: ['../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent implements OnInit {
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  get culture(): string {
    return this.translate.currentLang
  }
}
