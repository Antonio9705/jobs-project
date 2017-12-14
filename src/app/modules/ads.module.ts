//modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AppRoutesModule } from './routes.module'

//Pages
import { AdsListComponent } from './../components/ads/ads-list/ads-list.component'
import { AdsCreateComponent } from '../components/ads/ad-create/ads-create.component'
import { AdDetailsComponent } from '../components/ads/ad-details/ad-details.component'
import { AdDeleteComponent } from '../components/ads/ad-delete/ad-delete.component'
import { AdEditComponent } from '../components/ads/ad-edit/ad-edit.component'
import { MyAdsListComponent } from '../components/ads/my-ads-list/my-ads-list.component'

@NgModule({
  imports: [ CommonModule, FormsModule, AppRoutesModule ],
  declarations: [
    AdsListComponent,
    AdsCreateComponent,
    AdDetailsComponent,
    AdDeleteComponent,
    AdEditComponent,
    MyAdsListComponent
  ],
  providers: [],
  exports: []
})
export class AdsModule {}