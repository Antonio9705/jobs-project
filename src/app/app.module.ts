//modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutesModule } from './modules/routes.module'
import { AuthenticationModule } from './components/authentication/auth.module'
import { AdsModule } from './components/ads/ads.module'
import { SharedModule } from './components/shared/shared.module'
import { SearchModule } from './components/search/search.module'
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'toastr-ng2'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdminModule } from './components/admin/admin.module'
import { FormsModule } from '@angular/forms'

//components
import { AppComponent } from './app.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

//services
import { AuthService } from './services/auth.service' 
import { PollService } from './services/poll.service'
import { ToastrService } from 'toastr-ng2'
import { AdminGuard } from './services/admin-guard.service'
import { AuthGuard } from './services/auth-guard.service'
import { AdsService } from './services/ads.service'
import { CategoryService } from './services/category.service'
import { PagerService } from './services/pager.service'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    AuthenticationModule,
    SharedModule,
    AdsModule,
    SearchModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    ToastrService, 
    AuthService, 
    PollService, 
    AdminGuard, 
    AuthGuard,
    AdsService, 
    CategoryService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
