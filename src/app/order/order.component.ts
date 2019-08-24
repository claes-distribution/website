import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'dis-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit {

  constructor(
    private ref: ChangeDetectorRef,
    private i18nService: I18nService
  ) { }

  ngOnInit() {
    this.ref.markForCheck();
  }

  get culture(): string {
    return this.i18nService.language.split('-')[0];
  }
}
