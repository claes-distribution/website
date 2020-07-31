import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-inspire-recipes-leaflet',
  templateUrl: './inspire-recipes-leaflet.component.html',
  styleUrls: ['./inspire-recipes-leaflet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspireRecipesLeafletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
