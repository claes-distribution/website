import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-about-strategy',
  templateUrl: './about-strategy.component.html',
  styleUrls: ['./about-strategy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutStrategyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
