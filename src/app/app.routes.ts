import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout';
import { Home } from './home/home';
import { Detail } from './detail/detail';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home }
    ]
  },
  {
    path: 'detail',
    component: Detail
  }
];

