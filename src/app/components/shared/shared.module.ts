import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from '@angular/forms'
import { AppRoutesModule } from './../../modules/routes.module'

//components
import { HeaderComponent } from './../../components/shared/header/header.component'
import { NavigationComponent } from './../../components/shared/navigation/navigation.component'
import { PollComponent } from './../../components/shared/poll/poll.component'
import { UserInfoComponent } from './../../components/shared/user-info/user-info.component'
import { FooterComponent } from "../../components/shared/footer/footer.component"

@NgModule({
  imports: [ CommonModule, FormsModule, AppRoutesModule ],
  declarations: [
    HeaderComponent,
    NavigationComponent,
    PollComponent,
    UserInfoComponent,
    FooterComponent
  ],
  providers: [],
  exports: [
    HeaderComponent, 
    NavigationComponent, 
    PollComponent, 
    UserInfoComponent,
    FooterComponent
  ]
})
export class SharedModule {}