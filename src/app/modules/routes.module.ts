import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

//components
import { LoginComponent } from './../components/authentication/login/login.component'
import { RegisterComponent } from './../components/authentication/register/register.component'
import { NotFoundComponent } from './../components/not-found/not-found.component'
import { SearchComponent } from '../components/search/search-form/search.component'
import { SearchedAdsComponent } from '../components/search/searched-ads/searched-ads.component'

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
  { path: 'ads', loadChildren: "app/components/ads/ads.module#AdsModule" },
  { path: 'admin', canActivate: [AdminGuard], loadChildren: "app/components/admin/admin.module#AdminModule" },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }