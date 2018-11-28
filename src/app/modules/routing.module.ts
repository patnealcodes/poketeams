import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './../components/search/search.component';
import { TeamsComponent } from './../components/teams/teams.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'teams', component: TeamsComponent },

  // This path navigates to the search page
  // With a specific pokemon populating the detail field
  { path: 'details/:id', component: SearchComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
