import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products/products.component';
import { OrderPageComponent } from './pages/order/order.component';
import { InspirePageComponent } from './pages/inspire/inspire.component';
import { AboutPageComponent } from './pages/about/about.component';
import { EmailDisclaimerPageComponent } from './pages/email-disclaimer/email-disclaimer.component';
import { ProductCategoriesPageComponent } from './pages/product-categories/product-categories.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy/privacy-policy.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'pages.home.metaTitle',
      description: 'pages.home.metaDescription'
    }
  }, {
    path: 'products',
    component: ProductsPageComponent,
    data: {
      title: 'pages.products.metaTitle',
      description: 'pages.products.metaDescription'
    }
  }, {
    path: 'products/:grp',
    component: ProductCategoriesPageComponent,
    data: {
      title: 'pages.products.metaTitle',
      description: 'pages.products.metaDescription'
    }
  }, {
    path: 'order',
    component: OrderPageComponent,
    data: {
      title: 'pages.order.metaTitle',
      description: 'pages.order.metaDescription'
    }
  }, {
    path: 'inspire',
    component: InspirePageComponent,
    data: {
      title: 'pages.inspire.metaTitle',
      description: 'pages.inspire.metaDescription'
    }
  }, {
    path: 'about',
    component: AboutPageComponent,
    data: {
      title: 'pages.about.metaTitle',
      description: 'pages.about.metaDescription'
    }
  }, {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      title: 'pages.contact.metaTitle',
      description: 'pages.contact.metaDescription'
    }
  }, {
    path: 'privacy-policy',
    component: PrivacyPolicyPageComponent,
    data: {
      title: 'pages.privacy-policy.title',
      description: 'pages.privacy-policy.description',
      hidePolicy: true
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
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
