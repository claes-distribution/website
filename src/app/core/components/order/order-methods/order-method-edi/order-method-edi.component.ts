import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-order-method-edi',
  templateUrl: './order-method-edi.component.html',
  styleUrls: ['../order-method-shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderMethodEdiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
