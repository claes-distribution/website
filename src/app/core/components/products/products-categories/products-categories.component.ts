import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { CategoriesService, ICategory, IGetCategoriesResult } from 'src/app/core/data/categories.service';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dis-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsCategoriesComponent implements OnInit {
  @Input() parent: number | null;
  categories: ICategory[];
  showTitle = true;

  constructor(
    private categoriesService: CategoriesService,
    private ref: ChangeDetectorRef,
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    if (this.parent != null) {
      this.showTitle = false;
      this.loadChildCategories(this.parent)
    } else {
      this.loadCategories()
    }
  }

  private loadCategories() {
    const cachedCategories = this.retrieveFromCache('be.claes-distribution.www.categories')

    if (cachedCategories) {
      this.categories = JSON.parse(cachedCategories).map(e => this.mapCategory(e))
      this.ref.markForCheck()
    }

    this.categoriesService.get().subscribe((result: IGetCategoriesResult) => {
      window.sessionStorage.setItem('be.claes-distribution.www.categories', JSON.stringify(result.categories))

      this.categories = result.categories.map(e => this.mapCategory(e))
      this.ref.markForCheck()
    })
  }

  private loadChildCategories(parentId: number) {
    const cachedChilCategories = this.retrieveFromCache('be.claes-distribution.www.categories-' + parentId)

    if (cachedChilCategories) {
      this.categories = JSON.parse(cachedChilCategories).map(e => this.mapChildCategory(e))
      this.ref.markForCheck()
    }

    this.categoriesService.getChildren(parentId).subscribe((result: IGetCategoriesResult) => {
      window.sessionStorage.setItem('be.claes-distribution.www.categories-' + parentId, JSON.stringify(result.categories))

      this.categories = result.categories.map(e => this.mapChildCategory(e))
      this.ref.markForCheck()
    })
  }

  private mapChildCategory(e) {
    return {
      id: e.id,
      name: e.name,
      description: e.description,
      css: this.sanitizer.bypassSecurityTrustStyle(
        `background-image:url('https://pcm.groupclaes.be/v3/miniature/dis/website/category-image/${e.id}');`
      ),
      href: `https://shop.claes-distribution.be/products/${e.name[this.culture]}/${e.id}`
    }
  }

  private mapCategory(e) {
    return {
      id: e.id,
      name: e.name,
      description: e.description,
      css: this.sanitizer.bypassSecurityTrustStyle(
        `background-image:url('https://pcm.groupclaes.be/v3/miniature/dis/website/category-image/${e.id}');`
      ),
      href: `/products/${e.name[this.culture]}?id=${e.id}`
    }
  }

  private retrieveFromCache(cacheKey: string) {
    const cachedItem = window.sessionStorage.getItem(cacheKey)
    return cachedItem ?? null
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
