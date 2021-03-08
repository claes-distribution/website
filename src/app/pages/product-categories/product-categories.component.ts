import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss', '../pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoriesPageComponent implements OnInit {
  categoryId: number;
  categoryName: string;
  categoryTitle: string;
  categoryDescription: string;

  constructor(
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private meta: Meta,
    private translateService: TranslateService,
    private titleService: Title,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params.grp;
      this.ref.markForCheck();
    });
    this.route.queryParams.subscribe(params => {
      const id = +params.id;
      if (id) {
        this.categoryId = id;
        let title: string;
        let description: string;

        switch (id) {
          case 288:
            this.categoryTitle = 'pages.product-categories.voeding.title';
            this.categoryDescription = 'pages.product-categories.voeding.description';
            title = 'pages.product-categories.voeding.metaTitle';
            description = 'pages.product-categories.voeding.metaDescription';
            break;

          case 212:
            this.categoryTitle = 'pages.product-categories.uitrustingWinkel.title';
            this.categoryDescription = 'pages.product-categories.uitrustingWinkel.description';
            title = 'pages.product-categories.uitrustingWinkel.metaTitle';
            description = 'pages.product-categories.uitrustingWinkel.metaDescription';
            break;

          case 315:
            this.categoryTitle = 'pages.product-categories.uitrustingWerkhuis.title';
            this.categoryDescription = 'pages.product-categories.uitrustingWerkhuis.description';
            title = 'pages.product-categories.uitrustingWerkhuis.metaTitle';
            description = 'pages.product-categories.uitrustingWerkhuis.metaDescription';
            break;

          case 345:
            this.categoryTitle = 'pages.product-categories.snijgeriefToebehoren.title';
            this.categoryDescription = 'pages.product-categories.snijgeriefToebehoren.description';
            title = 'pages.product-categories.snijgeriefToebehoren.metaTitle';
            description = 'pages.product-categories.snijgeriefToebehoren.metaDescription';
            break;

          case 434:
            this.categoryTitle = 'pages.product-categories.kledijVerzorging.title';
            this.categoryDescription = 'pages.product-categories.kledijVerzorging.description';
            title = 'pages.product-categories.kledijVerzorging.metaTitle';
            description = 'pages.product-categories.kledijVerzorging.metaDescription';
            break;

          case 837:
            this.categoryTitle = 'pages.product-categories.algemeenKeukengerief.title';
            this.categoryDescription = 'pages.product-categories.algemeenKeukengerief.description';
            title = 'pages.product-categories.algemeenKeukengerief.metaTitle';
            description = 'pages.product-categories.algemeenKeukengerief.metaDescription';
            break;

          case 893:
            this.categoryTitle = 'pages.product-categories.specifiekSlagerijmateriaal.title';
            this.categoryDescription = 'pages.product-categories.specifiekSlagerijmateriaal.description';
            title = 'pages.product-categories.specifiekSlagerijmateriaal.metaTitle';
            description = 'pages.product-categories.specifiekSlagerijmateriaal.metaDescription';
            break;

          case 915:
            this.categoryTitle = 'pages.product-categories.onderhoud.title';
            this.categoryDescription = 'pages.product-categories.onderhoud.description';
            title = 'pages.product-categories.onderhoud.metaTitle';
            description = 'pages.product-categories.onderhoud.metaDescription';
            break;

          case 1662:
            this.categoryTitle = 'pages.product-categories.koopjes.title';
            this.categoryDescription = 'pages.product-categories.koopjes.description';
            title = 'pages.product-categories.koopjes.metaTitle';
            description = 'pages.product-categories.koopjes.metaDescription';
            break;

          case 969:
            this.categoryTitle = 'pages.product-categories.verpakkingen.title';
            this.categoryDescription = 'pages.product-categories.verpakkingen.description';
            title = 'pages.product-categories.verpakkingen.metaTitle';
            description = 'pages.product-categories.verpakkingen.metaDescription';
            break;

          case 1030:
            this.categoryTitle = 'pages.product-categories.partyBuffet.title';
            this.categoryDescription = 'pages.product-categories.partyBuffet.description';
            title = 'pages.product-categories.partyBuffet.metaTitle';
            description = 'pages.product-categories.partyBuffet.metaDescription';
            break;

          case 419:
            this.categoryTitle = 'pages.product-categories.darmen.title';
            this.categoryDescription = 'pages.product-categories.darmen.description';
            title = 'pages.product-categories.darmen.metaTitle';
            description = 'pages.product-categories.darmen.metaDescription';
            break;
        }

        if (title) {
          const Mtitle = this.translateService.instant(title);
          this.titleService.setTitle(Mtitle);
          this.meta.updateTag({ property: 'og:title', content: Mtitle }, `property="og:title"`);
        }
        if (description) {
          const Mdescription = this.translateService.instant(description);
          this.meta.updateTag({ name: 'description', content: Mdescription }, `name="description"`);
          this.meta.updateTag({ property: 'og:description', content: Mdescription }, `property="og:description"`);
        }
      }
      this.ref.markForCheck();
    });
  }

  goBack() {
    this.location.back();
  }
}
