import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-home-recipes-news',
  templateUrl: './home-recipes-news.component.html',
  styleUrls: ['./home-recipes-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeRecipesNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
