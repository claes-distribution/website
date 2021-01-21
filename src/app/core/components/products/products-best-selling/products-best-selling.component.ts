import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IBestSellingProduct, BestSellingService } from 'src/app/core/data/best-selling.service';

@Component({
  selector: 'dis-products-best-selling',
  templateUrl: './products-best-selling.component.html',
  styleUrls: ['./products-best-selling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsBestSellingComponent implements OnInit {
  bestSellingProducts: IBestSellingProduct[];

  constructor(
    private bestSellingService: BestSellingService,
    private translate: TranslateService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.bestSellingService.get().subscribe(result => {
      this.bestSellingProducts = result.bestSellingProducts;
      this.ref.markForCheck();
    });
  }

  setActiveProduct(id: number, source: string) {

  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
