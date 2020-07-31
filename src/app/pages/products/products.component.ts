import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent implements OnInit {
  slides = [{
    url: 'https://pcm.groupclaes.be/v3/content/gro/website/banner-image',
    title: {
      nl: 'Betrouwbare toeleverancier van topmerken',
      fr: 'Fournisseur fiable de grandes marques'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/mac/website/banner-image/1200',
    title: {
      nl: 'Ook welkom in onze winkel',
      fr: 'Bienvenue également dans notre salle d\'exposition'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/mac/website/banner-image/1300',
    title: {
      nl: 'Goed geschoolde techniekers',
      fr: 'Techniciens bien formés'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/mac/website/banner-image/1400',
    title: {
      nl: 'Eigen servicedienst voor interventie',
      fr: 'Propre service d\'intervention'
    }
  }];

  constructor() { }

  ngOnInit() {
  }

}
