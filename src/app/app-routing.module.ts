import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { EmailDisclaimerComponent } from './email-disclaimer/email-disclaimer.component';


const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'order', component: OrderComponent
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
