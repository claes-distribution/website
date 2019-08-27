import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-about-history',
  templateUrl: './about-history.component.html',
  styleUrls: ['./about-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
