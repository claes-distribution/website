import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-contact-opening-hours',
  templateUrl: './contact-opening-hours.component.html',
  styleUrls: ['./contact-opening-hours.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactOpeningHoursComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
