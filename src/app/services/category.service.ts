import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { ToastrService } from 'toastr-ng2';
import { Category } from '../components/pages/admin/category/Category';

@Injectable()
export class CategoryService {
  url: string = 'http://localhost:3000'
  private categories: Subject<Category[]> = new Subject<Category[]>()

  constructor(
    private http : HttpClient,
    private toastr: ToastrService
  ) {}
  
  getCategories() : Observable<Category[]> {
    return this.categories.asObservable()
  }

  createCateogory(categoryName) : void {
    this.http.post(this.url + "/category/create", {categoryName}, {
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

  listCategories() : void {
    this.http.get(this.url + "/category/all", {
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