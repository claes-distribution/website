import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-about-pride',
  templateUrl: './about-pride.component.html',
  styleUrls: ['./about-pride.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPrideComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
