import { Routes } from '@angular/router';
import { SeoData } from './core/model/seo.model';

const seo = (d: SeoData) => ({ seo: d });

export const routes: Routes = [
      {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
    data: seo({
      title: 'Cafés Especiais',
      description: 'Cafés especiais selecionados, torrados com qualidade e entregues na sua casa.',
      path: '/',
    }),
  },
  {
    path: 'sobre',
    loadComponent: () => import('./features/about/about').then(m => m.About),
    data: seo({
      title: 'Sobre Nós',
      description: 'Conheça a história da Dominus Cafés e nossa paixão por cafés especiais.',
      path: '/sobre',
    }),
  },
  { path: '**', redirectTo: '' },
];
