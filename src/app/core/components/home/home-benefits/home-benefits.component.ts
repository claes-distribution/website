import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-home-benefits',
  templateUrl: './home-benefits.component.html',
  styleUrls: ['./home-benefits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBenefitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
