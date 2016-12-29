import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IflComponent } from './ifl/ifl.component';
import { KaskoComponent } from './kasko/kasko.component';
import { OsagoComponent } from './osago/osago.component';
import { PusComponent } from './pus/pus.component';
import { LossesComponent } from './losses/losses.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DocsComponent } from './docs/docs.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full'},
  { path: 'calendar', component: CalendarComponent },
  { path: 'kasko', component: KaskoComponent },
  { path: 'osago', component: OsagoComponent },
  { path: 'ifl', component: IflComponent },
  { path: 'pus', component: PusComponent },
  { path: 'losses', component: LossesComponent },
  { path: 'blacklist', component: BlacklistComponent },
  { path: 'docs', component: DocsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
