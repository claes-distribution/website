import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-inspire-text',
  templateUrl: './inspire-text.component.html',
  styleUrls: ['./inspire-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspireTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
