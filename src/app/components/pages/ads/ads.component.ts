import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { AdsService } from '../../../services/ads.service'
import { PagerService } from '../../../services/pager.service'
import { Ad } from '../ads-create/Ad'
import * as _ from 'underscore'
import { ToastrService } from 'toastr-ng2'

@Component({
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  ads: Ad[]
  pager: any = {}
  pagedItems: Ad[]
  currentUserId: string

  constructor(
    private adsService: AdsService,
    private pagerService: PagerService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.currentUserId = sessionStorage.getItem('userId')
    this.adsService.listAds()
    this.adsService.getAds().subscribe(data => {
      this.ads = data

      this.route.queryParams.subscribe(data => {
        if (data.page) {
          if (Number(data.page) < 1 || Number(data.page) > Math.ceil(this.ads.length / 5)) {
            this.router.navigate(['invalid'])
            return
          }

          this.setPage(Number(data.page))
        } else {
          this.setPage(1)
        }
      })
    })
  }

  deleteAd(ad) {
    this.adsService.deleteAd(ad._id).subscribe(data => {
      if (data.success) {
        this.ads.splice(this.ads.indexOf(ad), 1)
        this.pagedItems.splice(this.ads.indexOf(ad), 1)
        this.setPage(1)
        this.toastr.success('Deleted success.')
      } else {
        this.toastr.error('Error')
      }
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return
    }

    this.pager = this.pagerService.getPager(this.ads.length, page)

    this.pagedItems = this.ads.slice(this.pager.startIndex, this.pager.endIndex + 1)

    this.router.navigate(['/ads'], { queryParams: { 'page': page } })
  }
}