import { Component } from '@angular/core'
import { CategoryService } from '../../../../services/category.service'

@Component({
  selector: 'create-category-form',
  templateUrl: './create-category-form.component.html'
})
export class CreateCategoryFormComponent {
  categoryName: string

  constructor(private categoryService : CategoryService) {}

  onSubmit() {
    this.categoryService.createCateogory(this.categoryName)
    this.categoryName = ''
  }
}