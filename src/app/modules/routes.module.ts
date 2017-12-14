import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

//components
import { LoginComponent } from './../components/authentication/login/login.component'
import { RegisterComponent } from './../components/authentication/register/register.component'
import { NotFoundComponent } from './../components/not-found/not-found.component'
import { AdminComponent } from '../components/admin/admin/admin.component'
import { UsersComponent } from '../components/admin/users/users.component'
import { PollsComponent } from '../components/admin/polls/polls.component'
import { AdsListComponent } from '../components/ads/ads-list/ads-list.component'
import { AdsCreateComponent } from '../components/ads/ad-create/ads-create.component'
import { CategoryComponent } from '../components/admin/category/category.component'
import { AdDetailsComponent } from '../components/ads/ad-details/ad-details.component'
import { AdDeleteComponent } from '../components/ads/ad-delete/ad-delete.component'
import { AdEditComponent } from '../components/ads/ad-edit/ad-edit.component'
import { MyAdsListComponent } from '../components/ads/my-ads-list/my-ads-list.component'
import { SearchedAdsComponent } from '../components/search/searched-ads/searched-ads.component'
import { SearchComponent } from '../components/search/search-form/search.component'

//guards
import { AdminGuard } from './../services/admin-guard.service'
import { AuthGuard } from '../services/auth-guard.service'

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'search', children: [
      { path: '', component: SearchedAdsComponent }
    ]
  },
  {
    path: 'ads', children: [
      { path: '', component: AdsListComponent },
      { path: 'create', canActivate: [AuthGuard], component: AdsCreateComponent },
      { path: 'own', canActivate: [AuthGuard], component: MyAdsListComponent },
      { path: 'details/:id', component: AdDetailsComponent },
      { path: 'delete/:id', canActivate: [AuthGuard], component: AdDeleteComponent },
      { path: 'edit/:id', canActivate: [AuthGuard], component: AdEditComponent }
    ]
  },
  {
    path: 'admin', canActivate: [AdminGuard], children: [
      { path: '', component: AdminComponent },
      { path: 'users', component: UsersComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'polls', component: PollsComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }