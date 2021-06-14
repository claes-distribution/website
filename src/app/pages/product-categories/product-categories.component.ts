import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
    private location: Location,
    private translate: TranslateService
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

        switch (id) {
          case 288:
            this.categoryTitle = 'pages.product-categories.voeding.title';
            this.categoryDescription = 'pages.product-categories.voeding.description';
            break;

          case 212:
            this.categoryTitle = 'pages.product-categories.uitrustingWinkel.title';
            this.categoryDescription = 'pages.product-categories.uitrustingWinkel.description';
            break;

          case 315:
            this.categoryTitle = 'pages.product-categories.uitrustingWerkhuis.title';
            this.categoryDescription = 'pages.product-categories.uitrustingWerkhuis.description';
            break;

          case 345:
            this.categoryTitle = 'pages.product-categories.snijgeriefToebehoren.title';
            this.categoryDescription = 'pages.product-categories.snijgeriefToebehoren.description';
            break;

          case 434:
            this.categoryTitle = 'pages.product-categories.kledijVerzorging.title';
            this.categoryDescription = 'pages.product-categories.kledijVerzorging.description';
            break;

          case 837:
            this.categoryTitle = 'pages.product-categories.algemeenKeukengerief.title';
            this.categoryDescription = 'pages.product-categories.algemeenKeukengerief.description';
            break;

          case 893:
            this.categoryTitle = 'pages.product-categories.specifiekSlagerijmateriaal.title';
            this.categoryDescription = 'pages.product-categories.specifiekSlagerijmateriaal.description';
            break;

          case 915:
            this.categoryTitle = 'pages.product-categories.onderhoud.title';
            this.categoryDescription = 'pages.product-categories.onderhoud.description';
            break;

          case 1662:
            this.categoryTitle = 'pages.product-categories.koopjes.title';
            this.categoryDescription = 'pages.product-categories.koopjes.description';
            break;

          case 969:
            this.categoryTitle = 'pages.product-categories.verpakkingen.title';
            this.categoryDescription = 'pages.product-categories.verpakkingen.description';
            break;

          case 1030:
            this.categoryTitle = 'pages.product-categories.partyBuffet.title';
            this.categoryDescription = 'pages.product-categories.partyBuffet.description';
            break;

          case 419:
            this.categoryTitle = 'pages.product-categories.darmen.title';
            this.categoryDescription = 'pages.product-categories.darmen.description';
            break;
        }
      }
      this.ref.markForCheck();
    });
  }

  goBack() {
    this.location.back();
  }

  get culture(): string {
    return this.translate.currentLang
  }
}
