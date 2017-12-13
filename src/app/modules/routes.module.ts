import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

//components
import { HomeComponent } from './../components/pages/home/home.component'
import { LoginComponent } from './../components/pages/login/login.component'
import { RegisterComponent } from './../components/pages/register/register.component'
import { NotFoundComponent } from './../components/pages/notFound/notFound.component'
import { AdminComponent } from '../components/pages/admin/admin/admin.component'
import { UsersComponent } from '../components/pages/admin/users/users.component'
import { PollsComponent } from '../components/pages/admin/polls/polls.component'
import { AdsComponent } from '../components/pages/ads/ads.component'
import { AdsCreateComponent } from '../components/pages/ads-create/adsCreate.component'
import { CategoryComponent } from '../components/pages/admin/category/category.component'
import { AdDetailsComponent } from '../components/pages/ad-details/adDetails.component'
import { AdDeleteComponent } from '../components/pages/ad-delete/adDelete.component'
import { AdEditComponent } from '../components/pages/ad-edit/adEdit.component'
import { SearchedAdsComponent } from '../components/pages/searched-ads/searchedAds.component'
import { MyAdsComponent } from '../components/pages/my-ads/myAds.component'

//guards
import { AuthGuard } from './../services/guard.service'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'search', children: [
      { path: '', component: SearchedAdsComponent }
    ]
  },
  {
    path: 'ads', children: [
      { path: '', component: AdsComponent },
      { path: 'create', component: AdsCreateComponent },
      { path: 'own', component: MyAdsComponent },
      { path: 'details/:id', component: AdDetailsComponent },
      { path: 'delete/:id', component: AdDeleteComponent },
      { path: 'edit/:id', component: AdEditComponent }
    ]
  },
  {
    path: 'admin', canActivate: [AuthGuard], children: [
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