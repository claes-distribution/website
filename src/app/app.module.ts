import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Material
import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatProgressBarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactOpeningComponent } from './contact-opening/contact-opening.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutHistoryComponent } from './about-history/about-history.component';
import { AboutMissionComponent } from './about-mission/about-mission.component';
import { AboutStrategyComponent } from './about-strategy/about-strategy.component';
import { AboutOurAssetsComponent } from './about-our-assets/about-our-assets.component';
import { OrderComponent } from './order/order.component';
import { EmailDisclaimerComponent } from './email-disclaimer/email-disclaimer.component';
import { PagesModule } from './pages/pages.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AboutCompanyComponent,
    AboutHistoryComponent,
    AboutMissionComponent,
    AboutStrategyComponent,
    AboutOurAssetsComponent,
    NewsListComponent,
    NewsItemComponent,
    ContactComponent,
    ContactFormComponent,
    ContactOpeningComponent,
    ContactInfoComponent,
    OrderComponent,
    EmailDisclaimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory, // exported factory function needed for AoT compilation
        deps: [HttpClient]
      }
    }),
    PagesModule,
    CoreModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
