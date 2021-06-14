import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'dis-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Input() pageTitle: string
  @Input() pageDescription: string

  constructor() { }

  ngOnInit() {
  }

  get title(): string {
    return this.pageTitle
  }

  get subtitle(): string {
    return this.pageDescription
  }
}
