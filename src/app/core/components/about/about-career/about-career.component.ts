import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-about-career',
  templateUrl: './about-career.component.html',
  styleUrls: ['./about-career.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutCareerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
