import { Routes } from '@angular/router';
import { SeoData } from './core/model/seo.model';
import { buildHomeJsonLd, organizationJsonLd } from './core/seo/json-ld';
import { HOME_CONTENT } from './features/home/home.content';
import { cardsData } from './features/home/data';
import { ABOUT_CONTENT } from './features/about/about.content';

const seo = (d: SeoData) => ({ seo: d });

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
    data: seo({
      ...HOME_CONTENT.seo,
      path: '/',
      jsonLd: buildHomeJsonLd(cardsData),
    }),
  },
  {
    path: 'sobre',
    loadComponent: () => import('./features/about/about').then(m => m.About),
    data: seo({
      ...ABOUT_CONTENT.seo,
      path: '/sobre',
      jsonLd: organizationJsonLd,  
    }),
  },
  { path: '**', redirectTo: '' },
];
