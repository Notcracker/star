"use strict";
var router_1 = require('@angular/router');
var clients_component_1 = require('./clients/clients.component');
var ifl_component_1 = require('./ifl/ifl.component');
var kasko_component_1 = require('./kasko/kasko.component');
var osago_component_1 = require('./osago/osago.component');
var policy_component_1 = require('./policy/policy.component');
var pus_component_1 = require('./pus/pus.component');
var losses_component_1 = require('./losses/losses.component');
var blacklist_component_1 = require('./blacklist/blacklist.component');
var calendar_component_1 = require('./calendar/calendar.component');
var docs_component_1 = require('./docs/docs.component');
var routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: policy_component_1.PolicyComponent },
    { path: 'clients', component: clients_component_1.ClientsComponent },
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
    { path: 'kasko', component: kasko_component_1.KaskoComponent },
    { path: 'osago', component: osago_component_1.OsagoComponent },
    { path: 'ifl', component: ifl_component_1.IflComponent },
    { path: 'pus', component: pus_component_1.PusComponent },
    { path: 'losses', component: losses_component_1.LossesComponent },
    { path: 'blacklist', component: blacklist_component_1.BlacklistComponent },
    { path: 'docs', component: docs_component_1.DocsComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=policy.routing.js.map