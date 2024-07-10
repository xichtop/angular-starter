import { Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch : 'full',
    redirectTo: 'example'
  },
  {
    path: 'signed-in-redirect',
    pathMatch : 'full',
    redirectTo: 'example'
  },
  {
    path: 'example',
    loadChildren: () => import('./modules/example/example.routes')
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
