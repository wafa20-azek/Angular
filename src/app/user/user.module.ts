import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [ListUserComponentComponent, AdduserComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
