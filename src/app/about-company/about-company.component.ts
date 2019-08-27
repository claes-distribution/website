import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutCompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
