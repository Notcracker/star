import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ContactsComponent } from './contacts/contacts.component';
import { ForumComponent } from './forum/forum.component';
import { FqaComponent } from './fqa/fqa.component';
import { LearningComponent } from './learning/learning.component';

import { routing }       from './useful.routing';

@NgModule({
  imports:      [ CommonModule, routing ],
  declarations: [
    ContactsComponent,
    ForumComponent,
    FqaComponent,
    LearningComponent
  ],
})
export class UsefulModule {}
