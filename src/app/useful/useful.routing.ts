import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

 import { ContactsComponent } from './contacts/contacts.component';
 import { ForumComponent } from './forum/forum.component';
 import { FqaComponent } from './fqa/fqa.component';
 import { LearningComponent } from './learning/learning.component';

const routes: Routes = [
  { path: '', redirectTo: 'forum', pathMatch: 'full' },
  { path: 'forum', component: ForumComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: 'fqa', component: FqaComponent },
  { path: 'learning', component: LearningComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
