import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { OrderMethodAgentComponent } from "./order-method-agent/order-method-agent.component";
import { OrderMethodAppComponent } from "./order-method-app/order-method-app.component";
import { OrderMethodEdiComponent } from "./order-method-edi/order-method-edi.component";
import { OrderMethodShopComponent } from "./order-method-shop/order-method-shop.component";
import { OrderMethodShowroomComponent } from "./order-method-showroom/order-method-showroom.component";
import { OrderMethodSupportComponent } from "./order-method-support/order-method-support.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild()
  ],
  declarations: [
    OrderMethodShopComponent,
    OrderMethodAppComponent,
    OrderMethodShowroomComponent,
    OrderMethodAgentComponent,
    OrderMethodEdiComponent,
    OrderMethodSupportComponent,
  ],
  exports: [
    OrderMethodShopComponent,
    OrderMethodAppComponent,
    OrderMethodShowroomComponent,
    OrderMethodAgentComponent,
    OrderMethodEdiComponent,
    OrderMethodSupportComponent,
  ]
})
export class OrderMethodsModule {
  constructor(@Optional() @SkipSelf() parentModule: OrderMethodsModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import OrderMethodsModule module in the Core only.`);
    }
  }
}
