import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTextComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
