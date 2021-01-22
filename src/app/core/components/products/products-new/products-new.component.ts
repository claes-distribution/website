import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { INewProduct, NewProductsService } from 'src/app/core/data/new.service';

// declare gtag as a function to access the JS code in TS
declare let gtag: Function;

@Component({
  selector: 'dis-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsNewComponent implements OnInit {
  newProducts: INewProduct[];

  constructor(
    private newService: NewProductsService,
    private translate: TranslateService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.newService.get().subscribe(result => {
      gtag('event', 'view_item_list', {
        'event_category': 'engagement',
        'event_label': 'new'
      });
      this.newProducts = result.newProducts;
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
