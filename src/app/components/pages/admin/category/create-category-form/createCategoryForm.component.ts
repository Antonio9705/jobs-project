import { Component } from '@angular/core'
import { AdminService } from '../../../../../services/admin.service';
import { CategoryService } from '../../../../../services/category.service';

@Component({
  selector: 'create-category-form',
  templateUrl: './createCategoryForm.component.html'
})
export class CreateCategoryFormComponent {
  categoryName: string

  constructor(private categoryService : CategoryService) {}

  onSubmit() {
    this.categoryService.createCateogory(this.categoryName)
    this.categoryName = ''
  }
}