import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-home-newsletter-subscribe',
  templateUrl: './home-newsletter-subscribe.component.html',
  styleUrls: ['./home-newsletter-subscribe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeNewsletterSubscribeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
