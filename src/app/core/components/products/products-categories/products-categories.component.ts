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
      this.categoriesService.getChildren(this.parent).subscribe((result: IGetCategoriesResult) => {
        this.categories = result.categories.map(e => {
          return {
            id: e.id,
            name: e.name,
            description: e.description,
            css: this.sanitizer.bypassSecurityTrustStyle(
              `background-image:url('https://pcm.groupclaes.be/v3/content/dis/website/category-image/${e.id}');`
            )
          };
        });
        this.ref.markForCheck();
      });
    } else {
      this.categoriesService.get().subscribe((result: IGetCategoriesResult) => {
        this.categories = result.categories.map(e => {
          return {
            id: e.id,
            name: e.name,
            description: e.description,
            css: this.sanitizer.bypassSecurityTrustStyle(
              `background-image:url('https://pcm.groupclaes.be/v3/content/dis/website/category-image/${e.id}');`
            )
          };
        });
        this.ref.markForCheck();
      });
    }
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
