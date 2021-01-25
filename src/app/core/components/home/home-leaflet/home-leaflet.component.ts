import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-home-leaflet',
  templateUrl: './home-leaflet.component.html',
  styleUrls: ['./home-leaflet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLeafletComponent implements OnInit {
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  get culture(): string {
    return this.translate.currentLang
  }
}
