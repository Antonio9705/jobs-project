import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from '@angular/forms'
import { searchRouter } from './search.routing'

//components
import { SearchComponent } from './../../components/search/search-form/search.component'
import { SearchedAdsComponent } from './../../components/search/searched-ads/searched-ads.component'

@NgModule({
  imports: [ CommonModule, FormsModule, searchRouter ],
  declarations: [
    SearchComponent,
    SearchedAdsComponent
  ],
  providers: [],
  exports: [
    
  ]
})
export class SearchModule {}