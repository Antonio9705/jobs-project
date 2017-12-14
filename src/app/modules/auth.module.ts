import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from '@angular/forms'

//components
import { LoginComponent } from './../components/authentication/login/login.component'
import { RegisterComponent } from './../components/authentication/register/register.component'

//directives
import { EqualValidator } from './../directives/validate-equal.directive'
import { EmailValidator } from './../directives/email-validate.directive'

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    EqualValidator,
    EmailValidator
  ],
  providers: [],
  exports: []
})
export class AuthenticationModule {}