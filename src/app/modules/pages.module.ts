import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

//Pages
import { HomeComponent } from './../components/pages/home/home.component'
import { LoginComponent } from './../components/pages/login/login.component'
import { RegisterComponent } from './../components/pages/register/register.component'
import { AdsComponent } from './../components/pages/ads/ads.component'
import { AdsCreateComponent } from '../components/pages/ads-create/adsCreate.component';
import { NotFoundComponent } from './../components/pages/notFound/notFound.component'

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdsComponent,
    AdsCreateComponent,
    NotFoundComponent
  ],
  providers: [],
  exports: []
})
export class PagesModule {}