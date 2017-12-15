import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

//components
import { SearchedAdsComponent } from './searched-ads/searched-ads.component'

const SEARCH_ROUTES: Routes = [
  { path: '', component: SearchedAdsComponent }
]

export const searchRouter = RouterModule.forChild(SEARCH_ROUTES)