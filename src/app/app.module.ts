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
import { PcmWebsiteBannerComponent } from './pcm-website-banner/pcm-website-banner.component';
import { PcmWebsiteLogoComponent } from './pcm-website-logo/pcm-website-logo.component';
// import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { PcmWebsiteCategoryImageSlideshowComponent } from './pcm-website-category-image-slideshow/pcm-website-category-image-slideshow.component';
import { PcmWebsiteCategoryImageComponent } from './pcm-website-category-image/pcm-website-category-image.component';
import { EmailDisclaimerComponent } from './email-disclaimer/email-disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PcmWebsiteBannerComponent,
    PcmWebsiteLogoComponent,
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
    EmailDisclaimerComponent,
    PcmWebsiteCategoryImageSlideshowComponent,
    PcmWebsiteCategoryImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    TranslateModule.forRoot(),
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
