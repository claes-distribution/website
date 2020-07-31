import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
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
import { ContactFooterComponent } from './components/contact/contact-footer/contact-footer.component';
import { ProductsTextComponent } from './components/products/products-text/products-text.component';
import { ProductsSearchComponent } from './components/products/products-search/products-search.component';
import { ProductsCategoriesComponent } from './components/products/products-categories/products-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteFilterPipe } from './pipes/auto-complete-filter.pipe';
import { OrderTextComponent } from './components/order/order-text/order-text.component';
import { OrderMethodShopComponent } from './components/order/order-methods/order-method-shop/order-method-shop.component';
import { OrderMethodAppComponent } from './components/order/order-methods/order-method-app/order-method-app.component';
import { OrderMethodShowroomComponent } from './components/order/order-methods/order-method-showroom/order-method-showroom.component';
import { OrderMethodAgentComponent } from './components/order/order-methods/order-method-agent/order-method-agent.component';
import { OrderMethodEdiComponent } from './components/order/order-methods/order-method-edi/order-method-edi.component';
import { OrderMethodsComponent } from './components/order/order-methods/order-methods.component';
import { OrderMethodSupportComponent } from './components/order/order-methods/order-method-support/order-method-support.component';
import { InspireTextComponent } from './components/inspire/inspire-text/inspire-text.component';
import { InspireRecipesLeafletComponent } from './components/inspire/inspire-recipes-leaflet/inspire-recipes-leaflet.component';
import { InspireNewsComponent } from './components/inspire/inspire-news/inspire-news.component';
import { InspireSpotlightProductsComponent } from './components/inspire/inspire-spotlight-products/inspire-spotlight-products.component';
import { BlogpostPopupComponent } from './popups/blogpost-popup/blogpost-popup.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  declarations: [
    HomeTextComponent,
    HomeProductsOrderComponent,
    HomeBenefitsComponent,
    HomeLeafletComponent,
    HomeRecipesNewsComponent,
    HomeSpotlightProductsComponent,

    ProductsTextComponent,
    ProductsSearchComponent,
    ProductsCategoriesComponent,

    OrderTextComponent,
    OrderMethodsComponent,
    OrderMethodShopComponent,
    OrderMethodAppComponent,
    OrderMethodShowroomComponent,
    OrderMethodAgentComponent,
    OrderMethodEdiComponent,
    OrderMethodSupportComponent,

    InspireTextComponent,
    InspireRecipesLeafletComponent,
    InspireNewsComponent,
    InspireSpotlightProductsComponent,

    ImageCarouselComponent,
    MenuComponent,
    ContactFooterComponent,

    PcmWebsiteLogoComponent,
    PcmWebsiteBannerComponent,
    PcmWebsiteCategoryImageComponent,
    PcmWebsiteCategoryImageSlideshowComponent,
    AutoCompleteFilterPipe,
    BlogpostPopupComponent
  ],
  exports: [
    HomeTextComponent,
    HomeProductsOrderComponent,
    HomeBenefitsComponent,
    HomeLeafletComponent,
    HomeRecipesNewsComponent,
    HomeSpotlightProductsComponent,

    ProductsTextComponent,
    ProductsSearchComponent,
    ProductsCategoriesComponent,

    OrderTextComponent,
    OrderMethodsComponent,
    OrderMethodShopComponent,
    OrderMethodAppComponent,
    OrderMethodShowroomComponent,
    OrderMethodAgentComponent,
    OrderMethodEdiComponent,
    OrderMethodSupportComponent,

    InspireTextComponent,
    InspireRecipesLeafletComponent,
    InspireNewsComponent,
    InspireSpotlightProductsComponent,

    ImageCarouselComponent,
    MenuComponent,
    ContactFooterComponent,

    PcmWebsiteLogoComponent,
    PcmWebsiteBannerComponent,
    PcmWebsiteCategoryImageComponent,
    PcmWebsiteCategoryImageSlideshowComponent,
    AutoCompleteFilterPipe,
    BlogpostPopupComponent
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
