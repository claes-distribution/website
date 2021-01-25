import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-order-method-support',
  templateUrl: './order-method-support.component.html',
  styleUrls: ['../order-method-shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderMethodSupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
