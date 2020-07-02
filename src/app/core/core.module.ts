import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ApiService } from './api/api.service';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { HomeTextComponent } from './components/home/home-text/home-text.component';
import { HomeProductsOrderComponent } from './components/home/home-products-order/home-products-order.component';
import { HomeBenefitsComponent } from './components/home/home-benefits/home-benefits.component';
import { HomeLeafletComponent } from './components/home/home-leaflet/home-leaflet.component';
import { HomeRecipesNewsComponent } from './components/home/home-recipes-news/home-recipes-news.component';
import { HomeSpotlightProductsComponent } from './components/home/home-spotlight-products/home-spotlight-products.component';
import { MenuComponent } from './components/menu/menu.component';
import { PcmWebsiteLogoComponent } from '../pcm-website-logo/pcm-website-logo.component';
import { PcmWebsiteBannerComponent } from '../pcm-website-banner/pcm-website-banner.component';
import { PcmWebsiteCategoryImageComponent } from '../pcm-website-category-image/pcm-website-category-image.component';
import { PcmWebsiteCategoryImageSlideshowComponent } from '../pcm-website-category-image-slideshow/pcm-website-category-image-slideshow.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  declarations: [
    ImageCarouselComponent,
    HomeTextComponent,
    HomeProductsOrderComponent,
    HomeBenefitsComponent,
    HomeLeafletComponent,
    HomeRecipesNewsComponent,
    HomeSpotlightProductsComponent,
    MenuComponent,

    PcmWebsiteLogoComponent,
    PcmWebsiteBannerComponent,
    PcmWebsiteCategoryImageComponent,
    PcmWebsiteCategoryImageSlideshowComponent
  ],
  exports: [
    ImageCarouselComponent,
    HomeTextComponent,
    HomeProductsOrderComponent,
    HomeBenefitsComponent,
    HomeLeafletComponent,
    HomeRecipesNewsComponent,
    HomeSpotlightProductsComponent,
    MenuComponent,

    PcmWebsiteLogoComponent,
    PcmWebsiteBannerComponent,
    PcmWebsiteCategoryImageComponent,
    PcmWebsiteCategoryImageSlideshowComponent
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
