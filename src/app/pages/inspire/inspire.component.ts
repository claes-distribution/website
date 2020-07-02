import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-inspire',
  templateUrl: './inspire.component.html',
  styleUrls: ['./inspire.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspirePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
