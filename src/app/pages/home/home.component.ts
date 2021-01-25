import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-home',
  templateUrl: './home.component.html',
  styleUrls: ['../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  slides = [{
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/100',
    title: {
      nl: 'Totaalleverancier voor beenhouwers en andere versspecialisten',
      fr: 'Fournisseur fiable de grandes marques'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/200',
    title: {
      nl: 'Welkom in onze winkel!',
      fr: 'Bienvenue également dans notre salle d\'exposition'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/300',
    title: {
      nl: 'Uitgebreide keuze aan topproducten',
      fr: 'Techniciens bien formés'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/400',
    title: {
      nl: 'Eigen vrachtwagens voor snelle levering',
      fr: 'Propre service d\'intervention'
    }
  }];

  constructor() { }

  ngOnInit() {
  }

}
