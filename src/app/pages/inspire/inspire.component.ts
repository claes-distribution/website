import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-inspire',
  templateUrl: './inspire.component.html',
  styleUrls: ['../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspirePageComponent implements OnInit {
  slides = [{
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/1300',
    title: {
      nl: 'Onze receptenwebsite is meer dan een bezoek waard ',
      fr: 'Fournisseur fiable de grandes marques'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/1400',
    title: {
      nl: 'Doe je voordeel met onze maandelijkse promoties',
      fr: 'Bienvenue également dans notre salle d\'exposition'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/1500',
    title: {
      nl: 'Claes Distribution, de meest complete groothandel',
      fr: 'Techniciens bien formés'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/1600',
    title: {
      nl: 'Wij informeren je over nieuwigheden in ons assortiment',
      fr: 'Propre service d\'intervention'
    }
  }];

  constructor() { }

  ngOnInit() {
  }
}
