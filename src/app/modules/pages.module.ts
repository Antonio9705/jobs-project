import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

//Pages
import { HomeComponent } from './../components/pages/home/home.component'
import { AboutComponent } from './../components/pages/about/about.component'
import { LoginComponent } from './../components/pages/login/login.component'
import { RegisterComponent } from './../components/pages/register/register.component'
import { NotFoundComponent } from './../components/pages/notFound/notFound.component'

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  providers: [],
  exports: []
})
export class PagesModule {}