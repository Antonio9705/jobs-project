import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { Category } from '../../../core/Category'
import { CategoryService } from '../../../services/category.service'

@Component({
  templateUrl: './category.component.html',
  styleUrls: [ './category.component.css' ]
})
export class CategoryComponent implements OnInit {
  categories: Category[]

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data)
    this.categoryService.listCategories()
  }

  deleteCategory(category) {
    this.categoryService.deleteCategory(category._id).subscribe(data => {
      if (data.success) {
        this.categories.splice(this.categories.indexOf(category), 1)
        this.toastr.success('Deleted success.')
      }
    })
  }
}