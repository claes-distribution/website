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
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { VerifySubscribePageComponent } from './pages/verify-subscribe-page/verify-subscribe-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      pageTitle: 'pages.home.pageTitle',
      pageDescription: 'pages.home.pageDescription',
      title: 'pages.home.metaTitle',
      description: 'pages.home.metaDescription'
    }
  }, {
    path: 'products',
    component: ProductsPageComponent,
    data: {
      pageTitle: 'pages.products.pageTitle',
      pageDescription: 'pages.products.pageDescription',
      title: 'pages.products.metaTitle',
      description: 'pages.products.metaDescription'
    }
  }, {
    path: 'products/koopjes',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.koopjes.pageTitle',
      pageDescription: 'pages.product-categories.koopjes.pageDescription',
      title: 'pages.product-categories.koopjes.metaTitle',
      description: 'pages.product-categories.koopjes.metaDescription'
    }
  }, {
    path: 'products/voeding',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.voeding.pageTitle',
      pageDescription: 'pages.product-categories.voeding.pageDescription',
      title: 'pages.product-categories.voeding.metaTitle',
      description: 'pages.product-categories.voeding.metaDescription'
    }
  }, {
    path: 'products/darmen',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.darmen.pageTitle',
      pageDescription: 'pages.product-categories.darmen.pageDescription',
      title: 'pages.product-categories.darmen.metaTitle',
      description: 'pages.product-categories.darmen.metaDescription'
    }
  }, {
    path: 'products/verpakkingen',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.verpakkingen.pageTitle',
      pageDescription: 'pages.product-categories.verpakkingen.pageDescription',
      title: 'pages.product-categories.verpakkingen.metaTitle',
      description: 'pages.product-categories.verpakkingen.metaDescription'
    }
  }, {
    path: 'products/uitrusting winkel',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.uitrustingWinkel.pageTitle',
      pageDescription: 'pages.product-categories.uitrustingWinkel.pageDescription',
      title: 'pages.product-categories.uitrustingWinkel.metaTitle',
      description: 'pages.product-categories.uitrustingWinkel.metaDescription'
    }
  }, {
    path: 'products/uitrusting werkhuis',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.uitrustingWerkhuis.pageTitle',
      pageDescription: 'pages.product-categories.uitrustingWerkhuis.pageDescription',
      title: 'pages.product-categories.koopjes.metaTitle',
      description: 'pages.product-categories.uitrustingWerkhuis.metaDescription'
    }
  }, {
    path: 'products/snijgerief en toebehoren',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.snijgeriefToebehoren.pageTitle',
      pageDescription: 'pages.product-categories.snijgeriefToebehoren.pageDescription',
      title: 'pages.product-categories.snijgeriefToebehoren.metaTitle',
      description: 'pages.product-categories.snijgeriefToebehoren.metaDescription'
    }
  }, {
    path: 'products/specifiek slagerijmateriaal',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.specifiekSlagerijmateriaal.pageTitle',
      pageDescription: 'pages.product-categories.specifiekSlagerijmateriaal.pageDescription',
      title: 'pages.product-categories.specifiekSlagerijmateriaal.metaTitle',
      description: 'pages.product-categories.specifiekSlagerijmateriaal.metaDescription'
    }
  }, {
    path: 'products/algemeen keukengerief',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.algemeenKeukengerief.pageTitle',
      pageDescription: 'pages.product-categories.algemeenKeukengerief.pageDescription',
      title: 'pages.product-categories.algemeenKeukengerief.metaTitle',
      description: 'pages.product-categories.algemeenKeukengerief.metaDescription'
    }
  }, {
    path: 'products/party en buffet',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.partyBuffet.pageTitle',
      pageDescription: 'pages.product-categories.partyBuffet.pageDescription',
      title: 'pages.product-categories.partyBuffet.metaTitle',
      description: 'pages.product-categories.partyBuffet.metaDescription'
    }
  }, {
    path: 'products/onderhoud',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.onderhoud.pageTitle',
      pageDescription: 'pages.product-categories.onderhoud.pageDescription',
      title: 'pages.product-categories.onderhoud.metaTitle',
      description: 'pages.product-categories.onderhoud.metaDescription'
    }
  }, {
    path: 'products/kledij en verzorging',
    component: ProductCategoriesPageComponent,
    data: {
      pageTitle: 'pages.product-categories.kledijVerzorging.pageTitle',
      pageDescription: 'pages.product-categories.kledijVerzorging.pageDescription',
      title: 'pages.product-categories.kledijVerzorging.metaTitle',
      description: 'pages.product-categories.kledijVerzorging.metaDescription'
    }
  }, {
    path: 'order',
    component: OrderPageComponent,
    data: {
      pageTitle: 'pages.order.pageTitle',
      pageDescription: 'pages.order.pageDescription',
      title: 'pages.order.metaTitle',
      description: 'pages.order.metaDescription'
    }
  }, {
    path: 'inspire',
    component: InspirePageComponent,
    data: {
      pageTitle: 'pages.inspire.pageTitle',
      pageDescription: 'pages.inspire.pageDescription',
      title: 'pages.inspire.metaTitle',
      description: 'pages.inspire.metaDescription'
    }
  }, {
    path: 'about',
    component: AboutPageComponent,
    data: {
      pageTitle: 'pages.about.pageTitle',
      pageDescription: 'pages.about.pageDescription',
      title: 'pages.about.metaTitle',
      description: 'pages.about.metaDescription'
    }
  }, {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      pageTitle: 'pages.contact.pageTitle',
      pageDescription: 'pages.contact.pageDescription',
      title: 'pages.contact.metaTitle',
      description: 'pages.contact.metaDescription'
    }
  }, {
    path: 'verify-subscribe/:hash',
    component: VerifySubscribePageComponent,
    data: {
      pageTitle: 'pages.verify-subscribe.pageTitle',
      pageDescription: 'pages.verify-subscribe.pageDescription',
      title: 'pages.verify-subscribe.metaTitle',
      description: 'pages.verify-subscribe.metaDescription'
    }
  }, {
    path: 'privacy-policy',
    component: PrivacyPolicyPageComponent,
    data: {
      pageTitle: 'pages.privacy-policy.pageTitle',
      pageDescription: 'pages.privacy-policy.pageDescription',
      title: 'pages.privacy-policy.title',
      description: 'pages.privacy-policy.description',
      hidePolicy: true
    }
  }, {
    path: 'legal/email-disclaimer',
    component: EmailDisclaimerPageComponent,
    data: {
      pageTitle: 'pages.email-disclaimer.pageTitle',
      pageDescription: 'pages.email-disclaimer.pageDescription',
      title: 'pages.email-disclaimer.title',
      description: 'pages.email-disclaimer.title'
    }
  }, {
    path: 'legal/email-disclaimer/:language',
    component: EmailDisclaimerPageComponent,
    data: {
      pageTitle: 'pages.email-disclaimer.pageTitle',
      pageDescription: 'pages.email-disclaimer.pageDescription',
      title: 'pages.email-disclaimer.title',
      description: 'pages.email-disclaimer.title'
    }
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
