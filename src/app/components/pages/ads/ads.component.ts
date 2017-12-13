import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { AdsService } from '../../../services/ads.service'
import { PagerService } from '../../../services/pager.service'
import { Ad } from '../ads-create/Ad'
import * as _ from 'underscore'
import { AuthService } from '../../../services/auth.service'

@Component({
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  ads: Ad[]
  pager: any = {}
  pagedItems: Ad[]
  currentUserId: string
  isHasPermission: boolean

  constructor(
    private adsService: AdsService,
    private pagerService: PagerService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isHasPermission = this.authService.isAdmin()
    this.currentUserId = sessionStorage.getItem('userId')
    this.adsService.listAds()
    this.adsService.getAds().subscribe(data => {
      this.ads = data

      this.route.queryParams.subscribe(data => {
        if (data.page) {
          if (Number(data.page) < 1 || Number(data.page) > Math.ceil(this.ads.length / 5)) {
            this.router.navigate(['ads'])
            return
          }

          this.setPage(Number(data.page))
        } else {
          this.setPage(1)
        }
      })
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return
    }

    this.pager = this.pagerService.getPager(this.ads.length, page)

    this.pagedItems = this.ads.slice(this.pager.startIndex, this.pager.endIndex + 1)
    this.router.navigate(['ads'], { queryParams: { 'page': page } })
  }
}