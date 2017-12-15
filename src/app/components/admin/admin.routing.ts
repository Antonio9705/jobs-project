import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

//components
import { AdminComponent } from './admin/admin.component'
import { UsersComponent } from './users/users.component'
import { CategoryComponent } from './category/category.component'
import { PollsComponent } from './polls/polls.component'


const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminComponent },
  { path: 'users', component: UsersComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'polls', component: PollsComponent }
]

export const adminRouter = RouterModule.forChild(ADMIN_ROUTES)