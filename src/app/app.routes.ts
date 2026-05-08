import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'devops',
    loadComponent: () => import('./pages/devops/devops').then(m => m.Devops),
  },
  {
    path: 'mean-stack',
    loadComponent: () => import('./pages/mean-stack/mean-stack').then(m => m.MeanStack),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
