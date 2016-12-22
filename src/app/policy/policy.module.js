"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_select2_1 = require('ng2-select2/ng2-select2');
var ng2_datetime_1 = require('ng2-datetime/ng2-datetime');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var primeng_1 = require('primeng/primeng');
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
var policy_pipe_1 = require('./policy.pipe');
var safeHTML_pipe_1 = require('../common/safeHTML.pipe');
var index_1 = require('./_services/index');
var policy_filters_component_1 = require('./policy/policy-filters.component');
var policy_routing_1 = require('./policy.routing');
var PolicyModule = (function () {
    function PolicyModule() {
    }
    PolicyModule = __decorate([
        core_1.NgModule({
            imports: [
                policy_routing_1.routing,
                common_1.CommonModule,
                ng2_datetime_1.NKDatetimeModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                primeng_1.ScheduleModule,
                primeng_1.CheckboxModule,
                primeng_1.DialogModule,
                primeng_1.CalendarModule,
                primeng_1.ToggleButtonModule
            ],
            declarations: [
                ng2_select2_1.Select2Component,
                policy_filters_component_1.PolicyFiltersComponent,
                policy_pipe_1.PolicyPipe,
                safeHTML_pipe_1.SafePipe,
                docs_component_1.DocsComponent,
                calendar_component_1.CalendarComponent,
                blacklist_component_1.BlacklistComponent,
                policy_component_1.PolicyComponent,
                clients_component_1.ClientsComponent,
                ifl_component_1.IflComponent,
                kasko_component_1.KaskoComponent,
                osago_component_1.OsagoComponent,
                pus_component_1.PusComponent,
                losses_component_1.LossesComponent
            ],
            providers: [
                index_1.PagerService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], PolicyModule);
    return PolicyModule;
}());
exports.PolicyModule = PolicyModule;
//# sourceMappingURL=policy.module.js.map