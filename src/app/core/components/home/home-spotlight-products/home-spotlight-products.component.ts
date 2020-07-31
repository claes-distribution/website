import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpotlightService, ISpotlightProduct } from '../../../data/spotlight.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-home-spotlight-products',
  templateUrl: './home-spotlight-products.component.html',
  styleUrls: ['./home-spotlight-products.component.scss']
})
export class HomeSpotlightProductsComponent implements OnInit {
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
