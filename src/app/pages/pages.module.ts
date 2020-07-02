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


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    TranslateModule.forChild()
  ],
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    InspirePageComponent,
    OrderPageComponent,
    ProductsPageComponent
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    InspirePageComponent,
    OrderPageComponent,
    ProductsPageComponent
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
