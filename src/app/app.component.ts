import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { map, filter, mergeMap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { merge } from 'rxjs';
import { nl } from '../assets/i18n/nl';
import { fr } from '../assets/i18n/fr';

@Component({
  selector: 'dis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  showCookiePolicy = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private meta: Meta
  ) {
    translateService.setTranslation('fr', fr);
    translateService.setTranslation('nl', nl);
    translateService.setDefaultLang(environment.defaultLanguage);
    translateService.addLangs(environment.supportedLanguages);
    const browserLang: string = translateService.getBrowserLang();

    if (typeof window !== 'undefined') {
      const myLang = window.localStorage.getItem('language');

      if (myLang) {
        switch (myLang) {
          case 'fr':
            translateService.use('fr');
            break;

          default:
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translateService.use('nl');
            break;
        }
      } else {
        switch (browserLang) {
          case 'fr':
            translateService.use('fr');
            break;

          default:
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translateService.use('nl');
            break;
        }
      }
    } else {
      translateService.use(environment.defaultLanguage);
    }
  }

  requiredUpdated($event: boolean): void {
    this.showCookiePolicy = $event;
  }

  ngOnInit() {
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

    // if (typeof window !== 'undefined') {
    //   onNavigationEnd.subscribe(_ => {
    //     window.scrollTo(0, 0);
    //   });
    // }

    merge(onNavigationEnd, this.translateService.onLangChange)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe((event: { title: string, description: string, hidePolicy?: boolean }) => {
        if (event.hidePolicy) {
          this.showCookiePolicy = false;
        } else {
          this.showCookiePolicy = this.policyRequired;
        }
        const title = event.title;
        const description = event.description;
        if (title) {
          const transTitle = this.translateService.instant(title);
          this.titleService.setTitle(transTitle);
          // this.meta.updateTag({ name: 'title', content: this.translateService.instant(title) }, `name="title"`);
          this.meta.updateTag({ property: 'og:title', content: transTitle }, `property="og:title"`);
        }
        if (description) {
          const transDescription = this.translateService.instant(description);
          this.meta.updateTag({ name: 'description', content: transDescription }, `name="description"`);
          this.meta.updateTag({ property: 'og:description', content: transDescription }, `property="og:description"`);
        }
      });
  }

  get policyRequired() {
    return !(window.localStorage.getItem('cookiesAccepted') === 'yes');
  }
}
