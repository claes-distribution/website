import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-home-leaflet-recipes',
  templateUrl: './home-leaflet-recipes.component.html',
  styleUrls: ['./home-leaflet-recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLeafletRecipesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
