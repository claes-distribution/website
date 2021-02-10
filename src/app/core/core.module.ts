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
import { MenuComponent } from './components/menu/menu.component';
import { ContactFooterComponent } from './components/contact/contact-footer/contact-footer.component';
import { ProductsTextComponent } from './components/products/products-text/products-text.component';
import { ProductsSearchComponent } from './components/products/products-search/products-search.component';
import { ProductsCategoriesComponent } from './components/products/products-categories/products-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteFilterPipe } from './pipes/auto-complete-filter.pipe';
import { OrderTextComponent } from './components/order/order-text/order-text.component';
import { OrderMethodsComponent } from './components/order/order-methods/order-methods.component';
import { InspireTextComponent } from './components/inspire/inspire-text/inspire-text.component';
import { InspireRecipesLeafletComponent } from './components/inspire/inspire-recipes-leaflet/inspire-recipes-leaflet.component';
import { InspireNewsComponent } from './components/inspire/inspire-news/inspire-news.component';
import { BlogpostPopupComponent } from './components/popups/blogpost-popup/blogpost-popup.component';
import { AboutTextComponent } from './components/about/about-text/about-text.component';
import { AboutCareerComponent } from './components/about/about-career/about-career.component';
import { AboutCompaniesComponent } from './components/about/about-companies/about-companies.component';
import { AboutMissionComponent } from './components/about/about-mission/about-mission.component';
import { AboutPrideComponent } from './components/about/about-pride/about-pride.component';
import { CookiePopupComponent } from './components/popups/cookie-popup/cookie-popup.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactInfoComponent } from './components/contact/contact-info/contact-info.component';
import { ContactOpeningHoursComponent } from './components/contact/contact-opening-hours/contact-opening-hours.component';
import { ContactForm2Component } from './components/contact/contact-form2/contact-form2.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { PrivacyPolicyTitleComponent } from './components/privacy-policy/privacy-policy-title/privacy-policy-title.component';
import { PrivacyPolicyBlockComponent } from './components/privacy-policy/privacy-policy-block/privacy-policy-block.component';
import { ProductsSpotlightComponent } from './components/products/products-spotlight/products-spotlight.component';
import { ProductsBestSellingComponent } from './components/products/products-best-selling/products-best-selling.component';
import { HomeNewsletterSubscribeComponent } from './home/home-newsletter-subscribe/home-newsletter-subscribe.component';
import { ProductBenefitsComponent } from './components/products/product-benefits/product-benefits.component';
import { ProductsNewComponent } from './components/products/products-new/products-new.component';
import { AboutVideoComponent } from './components/about/about-video/about-video.component';
import { ContactSubscribeComponent } from './components/contact/contact-subscribe/contact-subscribe.component';
import { OrderMethodsModule } from './components/order/order-methods/order-methods.module';
import { AngularPcmModule } from '@groupclaes/angular-pcm';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    OrderMethodsModule,
    TranslateModule.forChild(),
    MatButtonModule,
    AngularPcmModule
  ],
  declarations: [
    HomeTextComponent,
    HomeProductsOrderComponent,
    HomeBenefitsComponent,
    HomeLeafletComponent,
    HomeRecipesNewsComponent,

    ProductsTextComponent,
    ProductsSearchComponent,
    ProductsCategoriesComponent,
    ProductsSpotlightComponent,
    ProductsBestSellingComponent,
    ProductBenefitsComponent,
    ProductsNewComponent,

    OrderTextComponent,
    OrderMethodsComponent,

    InspireTextComponent,
    InspireRecipesLeafletComponent,
    InspireNewsComponent,

    AboutTextComponent,
    AboutCareerComponent,
    AboutCompaniesComponent,
    AboutMissionComponent,
    AboutPrideComponent,
    AboutVideoComponent,

    ContactFooterComponent,
    ContactInfoComponent,
    ContactOpeningHoursComponent,
    ContactForm2Component,
    ContactSubscribeComponent,

    PrivacyPolicyTitleComponent,
    PrivacyPolicyBlockComponent,

    AutoCompleteFilterPipe,
    BlogpostPopupComponent,
    CookiePopupComponent,
    FooterComponent,
    ImageCarouselComponent,
    MenuComponent,
    HomeNewsletterSubscribeComponent,
  ],
  exports: [
    HomeTextComponent,
    HomeProductsOrderComponent,
    HomeBenefitsComponent,
    HomeLeafletComponent,
    HomeRecipesNewsComponent,

    ProductsTextComponent,
    ProductsSearchComponent,
    ProductsCategoriesComponent,
    ProductsSpotlightComponent,
    ProductsBestSellingComponent,
    ProductBenefitsComponent,
    ProductsNewComponent,

    OrderTextComponent,
    OrderMethodsComponent,


    InspireTextComponent,
    InspireRecipesLeafletComponent,
    InspireNewsComponent,

    AboutTextComponent,
    AboutCareerComponent,
    AboutCompaniesComponent,
    AboutMissionComponent,
    AboutPrideComponent,
    AboutVideoComponent,

    ContactFooterComponent,
    ContactInfoComponent,
    ContactOpeningHoursComponent,
    ContactForm2Component,
    ContactSubscribeComponent,

    PrivacyPolicyTitleComponent,
    PrivacyPolicyBlockComponent,

    ImageCarouselComponent,
    MenuComponent,
    AutoCompleteFilterPipe,
    BlogpostPopupComponent,
    CookiePopupComponent,
    FooterComponent
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
