import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrongComponent } from './wrong.component'

export const routes: Routes = [
  { path: '', redirectTo: 'policy', pathMatch: 'full'},
  { path: 'policy', loadChildren: 'app/policy/policy.module#PolicyModule'  },
  { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
  {path: '**',  component: WrongComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
