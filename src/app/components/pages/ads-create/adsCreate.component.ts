import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
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
  workTypes: String[]

  constructor(
    private adsService: AdsService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ad = new Ad()
    
    this.categoryService.getCategories().subscribe(data => this.categories = data)
    this.categoryService.listCategories()

    this.workTypes = [ 'Full-time', 'Part-time', 'Casual', 'Fixed term', 'Shift Workers', 'Probation' ]
  }
  
  onSubmit() {
    this.router.navigate([ 'ads' ])
    this.ad.publisher = sessionStorage.getItem('userId')
    this.ad.createdDate = new Date(Date.now())
    this.adsService.createAd(this.ad)
  }
}