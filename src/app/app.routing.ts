import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrongComponent } from './wrong.component'

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', loadChildren: 'app/main/main.module#MainModule'  },
  { path: 'predictions', loadChildren: 'app/predictions/predictions.module#PredictionsModule' },
  { path: 'useful', loadChildren: 'app/useful/useful.module#UsefulModule'},
  { path: '**',  component: WrongComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
