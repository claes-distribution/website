import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'dis-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  constructor(
    private titleService: Title,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
