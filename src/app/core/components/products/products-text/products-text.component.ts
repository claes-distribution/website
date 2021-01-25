import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-products-text',
  templateUrl: './products-text.component.html',
  styleUrls: ['./products-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
