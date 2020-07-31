import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-home-text',
  templateUrl: './home-text.component.html',
  styleUrls: ['./home-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
