import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './modules/routes.module'
import { PagesModule } from './modules/pages.module'
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'toastr-ng2'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdminModule } from './modules/admin.module'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { NavigationComponent } from './components/navigation/navigation.component'
import { PollComponent } from './components/poll/poll.component'

import { AuthService } from './services/auth.service' 
import { PollService } from './services/poll.service'
import { ToastrService } from 'toastr-ng2'
import { AuthGuard } from './services/guard.service'
import { AdsService } from './services/ads.service'
import { CategoryService } from './services/category.service'
import { PagerService } from './services/pager.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    PagesModule,
    AdminModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    ToastrService, 
    AuthService, 
    PollService, 
    AuthGuard, 
    AdsService, 
    CategoryService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
