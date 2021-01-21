import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-product-benefits',
  templateUrl: './product-benefits.component.html',
  styleUrls: ['./product-benefits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBenefitsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
