import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SearchedAd } from '../../../models/SearchedAd'
import { CategoryService } from '../../../services/category.service'

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedAd: SearchedAd
  salaries: Array<string>
  categories: String[] = ['All']
  workTypes: String[]

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchedAd = new SearchedAd()

    this.salaries = ['All', 'less than 500 lv.', 'from 500 to 1000 lv.', 'from 1000 to 1500 lv.',
      'from 1500 to 2000 lv.', 'from 2000 to 3000 lv.', 'from 3000 to 5000 lv.', 'more than 5000 lv.']

    this.categoryService.getCategories().subscribe(data => {
      for (let category of data) {
        if (category.categoryName !== undefined) {
          this.categories.push(category.categoryName)
        }
      }
    })

    this.categoryService.listCategories()

    this.workTypes = [ 'Full-time', 'Part-time', 'Casual', 'Fixed term', 'Shift Workers', 'Probation' ]
  }

  onSubmit() {
    let queryParams = {
      page: 1
    }

    for (let param in this.searchedAd) {
      queryParams[param] = this.searchedAd[param]
    }

    this.router.navigate(['search'], { queryParams })
  }
}