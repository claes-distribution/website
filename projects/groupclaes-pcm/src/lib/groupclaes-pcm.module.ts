import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PcmWebsiteBannerComponent } from './pcm-website-banner/pcm-website-banner.component';
import { PcmWebsiteLogoComponent } from './pcm-website-logo/pcm-website-logo.component';


@NgModule({
  declarations: [
    PcmWebsiteBannerComponent,
    PcmWebsiteLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PcmWebsiteBannerComponent,
    PcmWebsiteLogoComponent
  ]
})
export class GroupclaesPcmModule { }
