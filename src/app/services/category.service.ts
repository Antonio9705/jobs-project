import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { ToastrService } from 'toastr-ng2';
import { Category } from '../components/pages/admin/category/Category'
import { headersWithAuthorization, headersWithoutAuthorization, baseUrl } from './../config/config'

@Injectable()
export class CategoryService {
  private categories: Subject<Category[]> = new Subject<Category[]>()

  constructor(
    private http : HttpClient,
    private toastr: ToastrService
  ) {}
  
  getCategories() : Observable<Category[]> {
    return this.categories.asObservable()
  }

  createCateogory(categoryName) : void {
    this.http.post(baseUrl + "/category/create", {categoryName}, {
      headers: headersWithAuthorization
    }).subscribe((data : any)  => {
      if (data.success) {
        this.toastr.success(data.message)
        this.listCategories()
      } else {
        this.toastr.error(data.message)
      }
    })
  }

  listCategories() : void {
    this.http.get(baseUrl + "/category/all", {
      headers: headersWithoutAuthorization
    }).subscribe((data : any) => {
      if (data.success) {
        this.categories.next(data.categories)
      }
    })
  }
}