"use strict";
var router_1 = require('@angular/router');
var profile_component_1 = require('./profile/profile.component');
var calculators_component_1 = require('./calculators/calculators.component');
var staff_component_1 = require('./staff/staff.component');
var operations_component_1 = require('./operations/operations.component');
var categories_component_1 = require('./categories/categories.component');
var units_component_1 = require('./units/units.component');
var insurance_types_component_1 = require('./insurance-types/insurance-types.component');
var companies_component_1 = require('./companies/companies.component');
var banks_component_1 = require('./banks/banks.component');
var appearance_component_1 = require('./appearance/appearance.component');
var security_component_1 = require('./security/security.component');
var routes = [
    { path: '', redirectTo: 'my', pathMatch: 'full' },
    { path: 'my', component: profile_component_1.ProfileComponent },
    { path: 'calculators', component: calculators_component_1.CalculatorsComponent },
    { path: 'staff', component: staff_component_1.StaffComponent },
    { path: 'operations', component: operations_component_1.OperationsComponent },
    { path: 'categories', component: categories_component_1.CategoriesComponent },
    { path: 'units', component: units_component_1.UnitsComponent },
    { path: 'insurance', component: insurance_types_component_1.InsuranceTypesComponent },
    { path: 'companies', component: companies_component_1.CompaniesComponent },
    { path: 'banks', component: banks_component_1.BanksComponent },
    { path: 'appearance', component: appearance_component_1.AppearanceComponent },
    { path: 'security', component: security_component_1.SecurityComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=profile.routing.js.map