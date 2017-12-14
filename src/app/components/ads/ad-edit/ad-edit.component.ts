import { Component, OnInit } from '@angular/core'
import { AdsService } from '../../../services/ads.service'
import { ActivatedRoute } from '@angular/router'
import { CategoryService } from '../../../services/category.service'
import { Ad } from '../../../models/Ad'
import { Category } from '../../../core/Category'

@Component({
  templateUrl: './ad-edit.component.html',
  styleUrls: [ './ad-edit.component.css' ]
})
export class AdEditComponent implements OnInit {
  ad: Ad
  categories: Category[]
  workTypes: String[]

  constructor(
    private adsService: AdsService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.workTypes = [ 'Full-time', 'Part-time', 'Casual', 'Fixed term', 'Shift Workers', 'Probation' ]

    this.adsService.getById(this.route.snapshot.params['id'])
      .subscribe((data : any) => {
        if (data.success) {
          this.ad = data.ad
        }
      })

    this.categoryService.getCategories()
      .subscribe((data: any) => {
        this.categories = data
      })
    
    this.categoryService.listCategories()
  }

  returnLastPage() {
    this.adsService.returnLastPage()
  }

  onSubmit() {
    this.adsService.editAd(this.ad)
  }
}