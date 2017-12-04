import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './modules/routes.module'
import { PagesModule } from './modules/pages.module'
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'toastr-ng2';
import { ToastrService } from 'toastr-ng2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { NavigationComponent } from './components/navigation/navigation.component'

import { AuthService } from './services/auth.service' 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    PagesModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ToastrService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
