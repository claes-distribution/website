import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-order-method-showroom',
  templateUrl: './order-method-showroom.component.html',
  styleUrls: ['../order-method-shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderMethodShowroomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
