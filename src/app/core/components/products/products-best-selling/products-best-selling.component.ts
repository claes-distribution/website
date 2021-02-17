import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IBestSellingProduct, BestSellingProductsService } from 'src/app/core/data/best-selling.service';

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
    this.loadProducts()
  }

  private loadProducts() {
    const cachedBestSellingProducts = this.retrieveFromCache('be.claes-distribution.www.bestSelling')

    if (cachedBestSellingProducts) {
      this.bestSellingProducts = JSON.parse(cachedBestSellingProducts)
      if (typeof gtag != 'undefined') {
        gtag('event', 'view_item_list', {
          'event_category': 'engagement',
          'event_label': 'bestSelling'
        });
      }
      this.ref.markForCheck()
      return
    }

    this.bestSellingService.get().subscribe((result: any) => {
      window.sessionStorage.setItem('be.claes-distribution.www.bestSelling', JSON.stringify(result.bestSellingProducts))

      if (typeof gtag != 'undefined') {
        gtag('event', 'view_item_list', {
          'event_category': 'engagement',
          'event_label': 'bestSelling'
        });
      }
      this.bestSellingProducts = result.bestSellingProducts
      this.ref.markForCheck()
    })
  }

  private retrieveFromCache(cacheKey: string) {
    const cachedItem = window.sessionStorage.getItem(cacheKey)
    return cachedItem ?? null
  }

  setActiveProduct(id: number, source: string) {
    console.log('setActiveProduct');

    if (typeof gtag != 'undefined') {
      gtag('event', 'view_item', {
        'event_category': 'engagement',
        'event_label': source,
        'value': id
      });
    }
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
