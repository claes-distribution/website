import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-order-text',
  templateUrl: './order-text.component.html',
  styleUrls: ['./order-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
