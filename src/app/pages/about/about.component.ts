import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dis-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent implements OnInit {
  slides = [{
    url: 'https://pcm.groupclaes.be/v3/content/gro/website/banner-image',
    title: {
      nl: 'Groots in z’n kleinschaligheid ',
      fr: 'Fournisseur fiable de grandes marques'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/1800',
    title: {
      nl: 'Sterke synergie tussen alle divisies',
      fr: 'Bienvenue également dans notre salle d\'exposition'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/1900',
    title: {
      nl: 'Meer dan 50 jaar ervaring op de teller',
      fr: 'Techniciens bien formés'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/2000',
    title: {
      nl: 'Wij staan klaar voor jou!',
      fr: 'Propre service d\'intervention'
    }
  }];

  constructor() { }

  ngOnInit() {
  }

}
