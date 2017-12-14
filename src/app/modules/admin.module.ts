import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { AppRoutesModule } from './routes.module'
import { FormsModule } from '@angular/forms'

import { AdminComponent } from '../components/admin/admin/admin.component'
import { UsersComponent } from '../components/admin/users/users.component'
import { PollsComponent } from '../components/admin/polls/polls.component'
import { CreatePollFormComponent } from '../components/admin/polls/create-poll-form/create-poll-form.component'
import { CategoryComponent } from "../components/admin/category/category.component"
import { CreateCategoryFormComponent } from "../components/admin/category/create-category-form/create-category-form.component";

import { AdminService } from "../services/admin.service"

@NgModule({
  imports: [ CommonModule, AppRoutesModule, FormsModule ],
  declarations: [
    AdminComponent,
    UsersComponent,
    PollsComponent,
    CategoryComponent,
    CreatePollFormComponent,
    CreateCategoryFormComponent
  ],
  providers: [AdminService],
  exports: []
})
export class AdminModule {}