import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-order-methods',
  templateUrl: './order-methods.component.html',
  styleUrls: ['./order-methods.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderMethodsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
