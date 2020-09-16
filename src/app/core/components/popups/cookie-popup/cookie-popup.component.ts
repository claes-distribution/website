import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'dis-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookiePopupComponent implements OnInit {
  @Output() requiredChange = new EventEmitter<boolean>();

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.requiredChange.emit(this.required);
  }

  acceptPolicy() {
    window.localStorage.setItem('cookiesAccepted', 'yes');
    this.requiredChange.emit(false);
  }

  get required(): boolean {
    return !(window.localStorage.getItem('cookiesAccepted') === 'yes');
  }
}
