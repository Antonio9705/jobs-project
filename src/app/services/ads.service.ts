import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { Router } from '@angular/router'
import { ToastrService } from 'toastr-ng2'
import { Location } from '@angular/common'
import { Category } from '../components/pages/admin/category/Category'
import { baseUrl } from './../config/config'
import { Ad } from '../components/pages/ads-create/Ad'
import { AuthService } from './auth.service'

@Injectable()
export class AdsService {
  private ads : Subject<Ad[]> = new Subject<Ad[]>()

  constructor(
    private http : HttpClient,
    private toastr: ToastrService,
    private location : Location,
    private router: Router,
    private authService: AuthService
  ) {}

  getAds() : Observable<Ad[]> {
    return this.ads.asObservable()
  }

  getById(id) : Observable<Ad> {
    return this.http.get<Ad>(baseUrl + `/ads/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  listAds() : void {
    this.http.get<Ad[]>(baseUrl + "/ads/all", {
      headers: {
        'Content-Type': 'application/json'
      }
    })
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

  editAd(ad : Ad) : void {
    this.http.put(baseUrl + "/ads/edit", ad, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    }).subscribe((data: any) => {
      if (data.success) {
        this.toastr.success(data.message)
        this.listAds()
      } else {
        this.toastr.error(data.message)
      }
    })
  }

  deleteAd(id) : void {
    this.http.delete(baseUrl + `/ads/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    }).subscribe((data : any) => {
      if (data.success) {
        this.toastr.success('Delete success.')
        this.listAds()
        this.authService.loadLoggedUserInfo()
      } else {
        this.toastr.error('Error')
      }
    })
  }

  returnLastPage() {
    this.location.back()
  }

  createAd(ad) : void {
    this.http.post(baseUrl + "/ads/create", ad, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    }).subscribe((data : any) => {
      if (data.success) {
        this.toastr.success(data.message)
        this.listAds()
        this.authService.loadLoggedUserInfo()
        
      } else {
        this.toastr.error(data.message)
      }
    })
  }
}