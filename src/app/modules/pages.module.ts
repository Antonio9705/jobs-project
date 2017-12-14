import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AppRoutesModule } from './routes.module'

//Pages
import { HomeComponent } from './../components/pages/home/home.component'
import { LoginComponent } from './../components/pages/login/login.component'
import { RegisterComponent } from './../components/pages/register/register.component'
import { AdsComponent } from './../components/pages/ads/ads.component'
import { AdsCreateComponent } from '../components/pages/ads-create/adsCreate.component'
import { AdDetailsComponent } from '../components/pages/ad-details/adDetails.component'
import { NotFoundComponent } from './../components/pages/notFound/notFound.component'
import { AdDeleteComponent } from '../components/pages/ad-delete/adDelete.component'
import { AdEditComponent } from '../components/pages/ad-edit/adEdit.component'
import { SearchComponent } from './../components/search/search.component'
import { SearchedAdsComponent } from '../components/pages/searched-ads/searchedAds.component'
import { MyAdsComponent } from '../components/pages/my-ads/myAds.component'

//directives
import { EqualValidator } from './../directives/validateEqual.directive'
import { EmailValidator } from '../directives/emailValidate.directive'


@NgModule({
  imports: [ CommonModule, FormsModule, AppRoutesModule ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdsComponent,
    AdsCreateComponent,
    AdDetailsComponent,
    AdDeleteComponent,
    AdEditComponent,
    SearchComponent,
    SearchedAdsComponent,
    MyAdsComponent,
    NotFoundComponent,
    EqualValidator,
    EmailValidator
  ],
  providers: [],
  exports: []
})
export class PagesModule {}