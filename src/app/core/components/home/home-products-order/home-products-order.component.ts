import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-home-products-order',
  templateUrl: './home-products-order.component.html',
  styleUrls: ['./home-products-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeProductsOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
