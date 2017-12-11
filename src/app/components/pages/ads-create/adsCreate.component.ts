import { Component, OnInit } from '@angular/core'
import { Ad } from './Ad'
import { AdsService } from '../../../services/ads.service'
import { CategoryService } from '../../../services/category.service'
import { Category } from '../admin/category/Category'

@Component({
  templateUrl: './adsCreate.component.html',
  styleUrls: [ './adsCreate.component.css' ]
})
export class AdsCreateComponent implements OnInit {
  ad: Ad
  categories: Category[]

  constructor(
    private adsService: AdsService,
    private categoryService: CategoryService
  ) {
    this.categoryService.getCategories().subscribe(data => this.categories = data)
    this.categoryService.listCategories()
  }

  ngOnInit(): void {
    this.ad = new Ad()
  }
  
  onSubmit() {
    this.ad.publisher = sessionStorage.getItem('userId')
    this.ad.createdDate = new Date(Date.now())
    this.adsService.createAd(this.ad)
  }
}