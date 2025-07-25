import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout';
import { Detail } from './detail/detail';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout
  },
  {
    path: 'detail',
    component: Detail
  }
];

