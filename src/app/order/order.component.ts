import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit {

  constructor(
    private ref: ChangeDetectorRef,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.ref.markForCheck();
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
