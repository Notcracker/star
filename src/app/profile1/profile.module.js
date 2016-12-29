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
var appearance_component_1 = require('./appearance/appearance.component');
var banks_component_1 = require('./banks/banks.component');
var calculators_component_1 = require('./calculators/calculators.component');
var categories_component_1 = require('./categories/categories.component');
var companies_component_1 = require('./companies/companies.component');
var insurance_types_component_1 = require('./insurance-types/insurance-types.component');
var operations_component_1 = require('./operations/operations.component');
var profile_component_1 = require('./profile/profile.component');
var staff_component_1 = require('./staff/staff.component');
var units_component_1 = require('./units/units.component');
var security_component_1 = require('./security/security.component');
var profile_routing_1 = require('./profile.routing');
var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [profile_routing_1.routing],
            declarations: [
                security_component_1.SecurityComponent,
                appearance_component_1.AppearanceComponent,
                banks_component_1.BanksComponent,
                calculators_component_1.CalculatorsComponent,
                categories_component_1.CategoriesComponent,
                companies_component_1.CompaniesComponent,
                insurance_types_component_1.InsuranceTypesComponent,
                operations_component_1.OperationsComponent,
                profile_component_1.ProfileComponent,
                staff_component_1.StaffComponent,
                units_component_1.UnitsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map