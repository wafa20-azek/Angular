import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'listuseres', pathMatch: 'full' },

  {
    path: 'listuseres',
    component: ListUserComponentComponent,
    children: [
      { path: 'edidUser/param', component: AdduserComponent },
      { path: 'adduser', component: AdduserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
