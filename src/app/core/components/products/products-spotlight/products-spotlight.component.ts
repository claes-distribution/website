import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ISpotlightProduct, SpotlightService } from 'src/app/core/data/spotlight.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-products-spotlight',
  templateUrl: './products-spotlight.component.html',
  styleUrls: ['./products-spotlight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSpotlightComponent implements OnInit {
  spotlightProducts: ISpotlightProduct[];

  constructor(
    private spotlightService: SpotlightService,
    private translate: TranslateService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.spotlightService.get().subscribe(result => {
      this.spotlightProducts = result.spotlightProducts;
      this.ref.markForCheck();
    });
  }

  setActiveProduct(id: number, source: string) {

  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
