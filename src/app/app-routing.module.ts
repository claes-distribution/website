import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products/products.component';
import { OrderPageComponent } from './pages/order/order.component';
import { InspirePageComponent } from './pages/inspire/inspire.component';
import { AboutPageComponent } from './pages/about/about.component';
import { EmailDisclaimerPageComponent } from './pages/email-disclaimer/email-disclaimer.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'pages.home.title',
      description: 'pages.home.description'
    }
  }, {
    path: 'products',
    component: ProductsPageComponent,
    data: {
      title: 'pages.products.title',
      description: 'pages.products.description'
    }
  }, {
    path: 'products/:grp',
    component: ProductsPageComponent,
    data: {
      title: 'pages.products.title',
      description: 'pages.products.description'
    }
  }, {
    path: 'order',
    component: OrderPageComponent,
    data: {
      title: 'pages.order.title',
      description: 'pages.order.description'
    }
  }, {
    path: 'inspire',
    component: InspirePageComponent,
    data: {
      title: 'pages.inspire.title',
      description: 'pages.inspire.description'
    }
  }, {
    path: 'about',
    component: AboutPageComponent,
    data: {
      title: 'pages.about.title',
      description: 'pages.about.description'
    }
  }, {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'pages.contact.title',
      description: 'pages.contact.description'
    }
  }, {
    path: 'legal/email-disclaimer',
    component: EmailDisclaimerPageComponent,
    data: {
      title: 'pages.email-disclaimer.title',
      description: 'pages.email-disclaimer.title'
    }
  }, {
    path: 'legal/email-disclaimer/:language',
    component: EmailDisclaimerPageComponent,
    data: {
      title: 'pages.email-disclaimer.title',
      description: 'pages.email-disclaimer.title'
    }
  }, {
    path: '**', redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
