import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from './core/i18n.service';
import { map, filter, merge, mergeMap } from 'rxjs/operators';

import { environment } from '../environments/environment';

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
    private translateService: TranslateService,
    private i18nService: I18nService) { }

  ngOnInit() {
    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

    onNavigationEnd.subscribe(_ => {
      window.scrollTo(0, 0);
    });

    onNavigationEnd.pipe(merge(this.translateService.onLangChange)).pipe(
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
        this.updateTitle(event);
      });
  }

  updateTitle(event: { title: string }) {
    // console.log(event);
    const title = event.title;
    if (title) {
      this.titleService.setTitle(this.translateService.instant(title));
    }
  }
}
