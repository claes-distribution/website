import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-about-companies',
  templateUrl: './about-companies.component.html',
  styleUrls: ['./about-companies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutCompaniesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
