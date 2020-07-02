import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { map, filter, mergeMap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { merge } from 'rxjs';

@Component({
  selector: 'dis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translate: TranslateService
  ) {
    // Setup translations
    translate.setDefaultLang(environment.defaultLanguage);
    translate.addLangs(environment.supportedLanguages);
    const browserLang: string = translate.getBrowserLang();

    if (typeof window !== 'undefined') {
      const myLang = window.localStorage.getItem('language');

      if (myLang) {
        switch (myLang) {
          case 'fr':
            translate.use('fr');
            break;

          default:
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use('nl');
            break;
        }
      } else {
        switch (browserLang) {
          case 'fr':
            translate.use('fr');
            break;

          default:
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use('nl');
            break;
        }
      }
    } else {
      translate.use(environment.defaultLanguage);
    }
  }

  ngOnInit() {
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

    onNavigationEnd.subscribe(_ => {
      window.scrollTo(0, 0);
    });

    merge(onNavigationEnd, this.translate.onLangChange).pipe(
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
      .subscribe((event: { title: string }) => {
        const title = event.title;
        if (title) {
          this.titleService.setTitle(this.translate.instant(title));
        }
      });
  }
}
