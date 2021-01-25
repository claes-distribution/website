import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-order-method-shop',
  templateUrl: './order-method-shop.component.html',
  styleUrls: ['../order-method-shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderMethodShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
