import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SeoService } from './core/seo/seo.service';
import { SeoData } from './core/model/seo.model';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { IconeWhatsapp } from './layout/icone-whatsapp/icone-whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, IconeWhatsapp],
  template: `
    <app-header />
    <router-outlet />
    <app-icone-whatsapp/>
    <app-footer />
  `,
})
export class App {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) route = route.firstChild;
        const data = route.data['seo'] as SeoData | undefined;
        if (data) this.seo.update(data);
      });
  }
}