import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CultureEntry } from 'src/app/core/api/api.service';
import { TranslateService } from '@ngx-translate/core';
import { CategoriesService, IGetCategoriesResult } from 'src/app/core/data/categories.service';

@Component({
  selector: 'dis-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSearchComponent implements OnInit {
  query = '';
  showClassList = '';
  results: { id: number, name: CultureEntry }[];

  constructor(
    private categoriesService: CategoriesService,
    private ref: ChangeDetectorRef,
    private translate: TranslateService
  ) { }


  ngOnInit(): void {
    this.loadCategories()
  }

  private loadCategories() {
    const cachedCategories = this.retrieveFromCache('be.claes-distribution.www.categories')

    if (cachedCategories) {
      this.results = JSON.parse(cachedCategories).map(e => this.mapResult(e))
      this.ref.markForCheck()
      return
    }

    this.categoriesService.get().subscribe((result: IGetCategoriesResult) => {
      window.sessionStorage.setItem('be.claes-distribution.www.categories', JSON.stringify(result.categories))

      this.results = result.categories.map(e => this.mapResult(e))
      this.ref.markForCheck()
    })
  }

  private mapResult(e) {
    return {
      id: e.id,
      name: e.name
    }
  }

  private retrieveFromCache(cacheKey: string) {
    const cachedItem = window.sessionStorage.getItem(cacheKey)
    return cachedItem ?? null
  }

  show(): void {
    this.showClassList = 'show';
    this.ref.markForCheck();
  }

  hide(): void {
    this.showClassList = '';
    this.ref.markForCheck();
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
