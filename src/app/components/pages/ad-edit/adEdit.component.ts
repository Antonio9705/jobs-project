import { Component, OnInit } from '@angular/core'
import { AdsService } from '../../../services/ads.service'
import { Ad } from '../ads-create/Ad'
import { ActivatedRoute } from '@angular/router'
import { CategoryService } from '../../../services/category.service'
import { Category } from '../admin/category/Category'

@Component({
  templateUrl: './adEdit.component.html',
  styleUrls: [ './adEdit.component.css' ]
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