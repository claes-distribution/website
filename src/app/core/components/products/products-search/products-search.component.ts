import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CultureEntry } from 'src/app/core/api/api.service';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { CategoriesService } from 'src/app/core/data/categories.service';

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
    this.categoriesService.get().pipe(map(result => result.categories.map(categoy => {
      return {
        id: categoy.id,
        name: categoy.name
      };
    }))).subscribe((categories: any[]) => {
      this.results = categories;
    });
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
