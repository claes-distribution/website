import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ISpotlightProduct, SpotlightProductsService } from 'src/app/core/data/spotlight.service';
import { TranslateService } from '@ngx-translate/core';

// declare gtag as a function to access the JS code in TS
declare let gtag: Function;

@Component({
  selector: 'dis-products-spotlight',
  templateUrl: './products-spotlight.component.html',
  styleUrls: ['./products-spotlight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSpotlightComponent implements OnInit {
  spotlightProducts: ISpotlightProduct[];

  constructor(
    private spotlightService: SpotlightProductsService,
    private translate: TranslateService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.spotlightService.get().subscribe(result => {
      gtag('event', 'view_item_list', {
        'event_category': 'engagement',
        'event_label': 'spotlight'
      });
      this.spotlightProducts = result.spotlightProducts;
      this.ref.markForCheck();
    });
  }

  setActiveProduct(id: number, source: string) {
    console.log('setActiveProduct');
    // Do nothing existing here (gtag)
    gtag('event', 'view_item', {
      'event_category': 'engagement',
      'event_label': source,
      'value': id
    });
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
