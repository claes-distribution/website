import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageComponent } from './home/home.component';
import { AboutPageComponent } from './about/about.component';
import { ContactPageComponent } from './contact/contact.component';
import { InspirePageComponent } from './inspire/inspire.component';
import { OrderPageComponent } from './order/order.component';
import { ProductsPageComponent } from './products/products.component';
import { CoreModule } from '../core/core.module';
import { EmailDisclaimerPageComponent } from './email-disclaimer/email-disclaimer.component';
import { ProductCategoriesPageComponent } from './product-categories/product-categories.component';
import { PrivacyPolicyPageComponent } from './privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    RouterModule,
    TranslateModule.forChild()
  ],
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    InspirePageComponent,
    OrderPageComponent,
    ProductsPageComponent,
    EmailDisclaimerPageComponent,
    ProductCategoriesPageComponent,
    PrivacyPolicyPageComponent,
    NotFoundComponent
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    InspirePageComponent,
    OrderPageComponent,
    ProductsPageComponent,
    EmailDisclaimerPageComponent,
    ProductCategoriesPageComponent,
    NotFoundComponent
  ]
})
export class PagesModule {
  constructor(@Optional() @SkipSelf() parentModule: PagesModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Pages module in the AppModule only.`);
    }
  }
}
