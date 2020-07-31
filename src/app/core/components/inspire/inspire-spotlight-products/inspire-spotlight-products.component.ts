import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ISpotlightProduct, SpotlightService } from 'src/app/core/data/spotlight.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-inspire-spotlight-products',
  templateUrl: './inspire-spotlight-products.component.html',
  styleUrls: ['./inspire-spotlight-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspireSpotlightProductsComponent implements OnInit {
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

  get culture(): string {
    return this.translate.currentLang;
  }
}
