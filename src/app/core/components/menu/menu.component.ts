import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'dis-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Input() pageTitle: string

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
  }

  get title(): string {
    return this.pageTitle
  }

  get subtitle(): string {
    return this.titleService.getTitle()
  }
}
