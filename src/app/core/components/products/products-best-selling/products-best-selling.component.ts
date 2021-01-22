import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IBestSellingProduct, BestSellingProductsService } from 'src/app/core/data/best-selling.service';

// declare gtag as a function to access the JS code in TS
declare let gtag: Function;

@Component({
  selector: 'dis-products-best-selling',
  templateUrl: './products-best-selling.component.html',
  styleUrls: ['./products-best-selling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsBestSellingComponent implements OnInit {
  bestSellingProducts: IBestSellingProduct[];

  constructor(
    private bestSellingService: BestSellingProductsService,
    private translate: TranslateService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.bestSellingService.get().subscribe(result => {
      gtag('event', 'view_item_list', {
        'event_category': 'engagement',
        'event_label': 'bestSelling'
      });
      this.bestSellingProducts = result.bestSellingProducts;
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
