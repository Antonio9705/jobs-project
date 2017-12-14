import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { ToastrService } from 'toastr-ng2'
import { baseUrl } from './../config/config'
import { Category } from '../core/Category'

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
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    }).subscribe((data : any)  => {
      if (data.success) {
        this.toastr.success(data.message)
        this.listCategories()
      } else {
        this.toastr.error(data.message)
      }
    })
  }

  deleteCategory(id) : Observable<any> {
    return this.http.delete(baseUrl + `/category/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
  }

  listCategories() : void {
    this.http.get(baseUrl + "/category/all", {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe((data : any) => {
      if (data.success) {
        this.categories.next(data.categories)
      }
    })
  }
}