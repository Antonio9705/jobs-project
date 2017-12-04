import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

//components
import { HomeComponent } from './../components/pages/home/home.component'
import { AboutComponent } from './../components/pages/about/about.component'
import { LoginComponent } from './../components/pages/login/login.component'
import { RegisterComponent } from './../components/pages/register/register.component'
import { NotFoundComponent } from './../components/pages/notFound/notFound.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}