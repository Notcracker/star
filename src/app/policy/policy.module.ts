import { NgModule }   from '@angular/core';
import { CommonModule }  from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IflComponent } from './ifl/ifl.component';
import { KaskoComponent } from './kasko/kasko.component';
import { OsagoComponent } from './osago/osago.component';
import { PusComponent } from './pus/pus.component';
import { LossesComponent } from './losses/losses.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DocsComponent } from './docs/docs.component';
import { PolicyPipe } from './policy.pipe';

import { routing } from './policy.routing';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    PolicyPipe,
    DocsComponent,
    CalendarComponent,
    BlacklistComponent,
    IflComponent,
    KaskoComponent,
    OsagoComponent,
    PusComponent,
    LossesComponent
  ],
  providers: [
  ],
})

export class PolicyModule { }
