import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
