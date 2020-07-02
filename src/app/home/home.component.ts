import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../core/api/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dis-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  categories: any[];

  constructor(
    private api: ApiService,
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.api.getCategories('top').subscribe(items => {
      if (items) {
        this.categories = items;
        for (const category of items) {
          // tslint:disable-next-line: max-line-length
          category.url = this.sanitizer.bypassSecurityTrustUrl(`https://shop.claes-distribution.be/products/${category.Name[this.culture]}/${category.Id}?page=0&department=-1&ux=website`);
          for (const subcategory of category.Categories) {
            // tslint:disable-next-line: max-line-length
            subcategory.url = this.sanitizer.bypassSecurityTrustUrl(`https://shop.claes-distribution.be/products/${subcategory.Name[this.culture]}/${subcategory.Id}?page=0&department=-1&ux=website`);
          }
          this.api.getPcmImagesList(category.GroupId).subscribe(r => {
            const images = [];
            for (const image of r.images) {
              images.push('https://pcm.groupclaes.be/v2/content/file/' + image.guid);
            }
            category.images = images; // https://pcm.groupclaes.be/v2/content/file/7D7C326B-EADC-43A5-99D6-151CB42EE7D6"
            this.ref.markForCheck();
          });
        }
        this.ref.markForCheck();
      }
    });
  }

  get culture(): string {
    return this.translate.currentLang;
  }
}
