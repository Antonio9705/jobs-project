import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutesModule } from './routes.module'
import { FormsModule } from '@angular/forms'

import { AdminComponent } from '../components/pages/admin/admin/admin.component'
import { UsersComponent } from '../components/pages/admin/users/users.component'
import { PollsComponent } from '../components/pages/admin/polls/polls.component'
import { CreatePollFormComponent } from '../components/pages/admin/polls/create-poll-form/createPollForm.component'


import { AdminService } from "../services/admin.service";

@NgModule({
  imports: [ CommonModule, AppRoutesModule, FormsModule ],
  declarations: [
    AdminComponent,
    UsersComponent,
    PollsComponent,
    CreatePollFormComponent
  ],
  providers: [AdminService],
  exports: []
})
export class AdminModule {}