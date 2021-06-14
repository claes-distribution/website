import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-products',
  templateUrl: './products.component.html',
  styleUrls: ['../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent implements OnInit {
  slides = [{
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/500',
    title: {
      nl: 'Ruim en zeer compleet productassortiment',
      fr: 'Fournisseur fiable de grandes marques'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/600',
    title: {
      nl: 'Enkel artikelen van de allerbeste kwaliteit',
      fr: 'Bienvenue également dans notre salle d\'exposition'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/700',
    title: {
      nl: 'Onze klantendienst denkt graag met je mee!',
      fr: 'Techniciens bien formés'
    }
  }, {
    url: 'https://pcm.groupclaes.be/v3/content/dis/website/banner-image/800',
    title: {
      nl: 'Snelle levering dankzij optimaal voorraadbeheer',
      fr: 'Propre service d\'intervention'
    }
  }];

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  get culture(): string {
    return this.translate.currentLang
  }
}
