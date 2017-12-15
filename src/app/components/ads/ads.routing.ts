import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

//components
import { AdsListComponent } from './ads-list/ads-list.component'
import { AdsCreateComponent } from './ad-create/ads-create.component'
import { MyAdsListComponent } from './my-ads-list/my-ads-list.component'
import { AdDetailsComponent } from './ad-details/ad-details.component'
import { AdDeleteComponent } from './ad-delete/ad-delete.component'
import { AdEditComponent } from './ad-edit/ad-edit.component'

//guards
import { AuthGuard } from '../../services/auth-guard.service'

const ADS_ROUTES: Routes = [
  { path: '', component: AdsListComponent },
  { path: 'create', canActivate: [AuthGuard], component: AdsCreateComponent },
  { path: 'own', canActivate: [AuthGuard], component: MyAdsListComponent },
  { path: 'details/:id', component: AdDetailsComponent },
  { path: 'delete/:id', canActivate: [AuthGuard], component: AdDeleteComponent },
  { path: 'edit/:id', canActivate: [AuthGuard], component: AdEditComponent }
]

export const adsRouter = RouterModule.forChild(ADS_ROUTES)