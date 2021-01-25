import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-order',
  templateUrl: './order.component.html',
  styleUrls: ['../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderPageComponent implements OnInit {
  slides = [{
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/900',
    title: {
      nl: 'Bestel 24/7 online via onze eShop',
      fr: 'Fournisseur fiable de grandes marques'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/1000',
    title: {
      nl: 'Installeer onze app op je smartphone of tablet',
      fr: 'Bienvenue également dans notre salle d\'exposition'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/1100',
    title: {
      nl: 'Ruime keuze in onze toonzaal',
      fr: 'Techniciens bien formés'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/1200',
    title: {
      nl: 'Onze klantendienst denkt graag met je mee',
      fr: 'Propre service d\'intervention'
    }
  }];

  constructor() { }

  ngOnInit() {
  }
}
