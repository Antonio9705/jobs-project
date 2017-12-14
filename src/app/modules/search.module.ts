import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from '@angular/forms'
import { AppRoutesModule } from './routes.module'

//components
import { SearchComponent } from './../components/search/search-form/search.component'
import { SearchedAdsComponent } from './../components/search/searched-ads/searched-ads.component'

@NgModule({
  imports: [ CommonModule, FormsModule, AppRoutesModule ],
  declarations: [
    SearchComponent,
    SearchedAdsComponent
  ],
  providers: [],
  exports: [

  ]
})
export class SearchModule {}