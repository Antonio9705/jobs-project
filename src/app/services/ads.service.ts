import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { ToastrService } from 'toastr-ng2';
import { Category } from '../components/pages/admin/category/Category';

@Injectable()
export class AdsService {
  url: string = 'http://localhost:3000'
  private categories: Subject<Category[]> = new Subject<Category[]>()

  constructor(
    private http : HttpClient,
    private toastr: ToastrService
  ) {}
  
  getAds() {
    
  }

  createAd(ad) {
    this.http.post(this.url + "/ads/create", ad, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe((data : any) => {
      if (data.success) {
        this.toastr.success(data.message)
      } else {
        this.toastr.error(data.message)
      }
    })
  }
}