import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmailDisclaimerComponent } from './email-disclaimer/email-disclaimer.component';
import { HomePageComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products/products.component';
import { OrderPageComponent } from './pages/order/order.component';
import { InspirePageComponent } from './pages/inspire/inspire.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [{
  path: '', component: HomePageComponent
}, {
  path: 'products', component: ProductsPageComponent
}, {
  path: 'order', component: OrderPageComponent
}, {
  path: 'inspire', component: InspirePageComponent
}, {
  path: 'about', component: AboutComponent
}, {
  path: 'contact', component: ContactComponent
}, {
  path: 'legal/email-disclaimer', component: EmailDisclaimerComponent
}, {
  path: 'legal/email-disclaimer/:language', component: EmailDisclaimerComponent
}, { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
