import { NgModule } from '@angular/core';

import { AppearanceComponent } from './appearance/appearance.component';
import { BanksComponent } from './banks/banks.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { CategoriesComponent } from './categories/categories.component';
import { CompaniesComponent } from './companies/companies.component';
import { InsuranceTypesComponent } from './insurance-types/insurance-types.component';
import { OperationsComponent } from './operations/operations.component';
import { StaffComponent } from './staff/staff.component';
import { UnitsComponent } from './units/units.component';
import { SecurityComponent } from './security/security.component';

import { routing }             from './profile.routing';

@NgModule({
  imports: [ routing ],
  declarations: [
    SecurityComponent,
    AppearanceComponent,
    BanksComponent,
    CalculatorsComponent,
    CategoriesComponent,
    CompaniesComponent,
    InsuranceTypesComponent,
    OperationsComponent,
    StaffComponent,
    UnitsComponent
  ]
})
export class PredictionsModule { }
