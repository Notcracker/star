import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorsComponent } from './calculators/calculators.component';
import { StaffComponent } from './staff/staff.component';
import { OperationsComponent } from './operations/operations.component';
import { CategoriesComponent } from './categories/categories.component';
import { UnitsComponent } from './units/units.component';
import { InsuranceTypesComponent } from './insurance-types/insurance-types.component';
import { CompaniesComponent } from './companies/companies.component';
import { BanksComponent } from './banks/banks.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { SecurityComponent } from './security/security.component';


const routes: Routes = [
  { path:'', redirectTo: 'my', pathMatch:'full' },
  { path: 'calculators', component: CalculatorsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'units', component: UnitsComponent },
  { path: 'insurance', component: InsuranceTypesComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'appearance', component: AppearanceComponent },
  { path: 'security', component: SecurityComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
