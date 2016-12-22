"use strict";
var router_1 = require('@angular/router');
var contacts_component_1 = require('./contacts/contacts.component');
var forum_component_1 = require('./forum/forum.component');
var fqa_component_1 = require('./fqa/fqa.component');
var learning_component_1 = require('./learning/learning.component');
var routes = [
    { path: '', redirectTo: 'forum', pathMatch: 'full' },
    { path: 'forum', component: forum_component_1.ForumComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'fqa', component: fqa_component_1.FqaComponent },
    { path: 'learning', component: learning_component_1.LearningComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=useful.routing.js.map