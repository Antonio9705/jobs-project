import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { ToastrService } from 'toastr-ng2';
import { Category } from '../components/pages/admin/category/Category'
import { headersWithAuthorization, baseUrl } from './../config/config'
import { Ad } from '../components/pages/ads-create/Ad'

@Injectable()
export class AdsService {
  private ads : Subject<Ad[]> = new Subject<Ad[]>()

  constructor(
    private http : HttpClient,
    private toastr: ToastrService
  ) {}

  getAds() : Observable<Ad[]> {
    return this.ads.asObservable()
  }

  listAds() : void {
    this.http.get<Ad[]>(baseUrl + "/ads/all")
      .subscribe((data : any) => {
        if (data.ads) {
          let ads = data.ads.sort(this.sortFunction)
          this.ads.next(ads)
        }
      })
  }

  private sortFunction(a, b) {
    let dateA = new Date(a.createdDate).getTime()
    let dateB = new Date(b.createdDate).getTime()

    return dateA > dateB ? -1 : 1
  }

  createAd(ad) : void {
    this.http.post(baseUrl + "/ads/create", ad, {
      headers: headersWithAuthorization
    }).subscribe((data : any) => {
      if (data.success) {
        this.toastr.success(data.message)
        this.listAds()
      } else {
        this.toastr.error(data.message)
      }
    })
  }
}