import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
