import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AdsService } from '../../../services/ads.service'
import { PagerService } from '../../../services/pager.service'
import { Router } from '@angular/router'
import { Ad } from '../ads-create/Ad'

@Component({
  templateUrl: './searchedAds.component.html',
  styleUrls: ['./searchedAds.component.css']
})
export class SearchedAdsComponent implements OnInit {
  ads: Ad[]
  pager: any = {}
  pagedItems: Ad[]
  queries: Object = {}

  constructor(
    private adsService: AdsService,
    private route: ActivatedRoute,
    private pagerService: PagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAds()
  }

  loadAds() {
    this.adsService.getAds().subscribe(data => {
      this.ads = data
      this.getQueries()
    })

    this.adsService.listAds()
  }

  getQueries() {
    this.route.queryParams.subscribe(data => {
      this.queries = data

      this.filterAds(data)

      if (data.page) {
        if (Number(data.page) < 1 || Number(data.page) > Math.ceil(this.ads.length / 5)) {
          this.router.navigate(['search'], { queryParams: this.queries })
          return
        }

        this.setPage(Number(data.page))
      } else {
        this.setPage(1)
      }
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return
    }

    this.pager = this.pagerService.getPager(this.ads.length, page)

    this.pagedItems = this.ads.slice(this.pager.startIndex, this.pager.endIndex + 1)

    let newQueries = {}

    for (let property in this.queries) {
      if (property === 'page') {
        newQueries[property] = page
      } else {
        newQueries[property] = this.queries[property]
      }
    }

    this.router.navigate(['search'], { queryParams: newQueries })
  }

  filterAds(data) {
    for (let property in data) {
      switch (property) {
        case 'category':
          this.ads = this.ads.filter(a => a.category === data[property])
          break;
        case 'location':
          this.ads = this.ads.filter(a => a.location === data[property])
          break;
        case 'keywords':
          this.ads = this.ads.filter(a => a.position.includes(data[property]))
          break;
        case 'workType':
          this.ads = this.ads.filter(a => a.workType === data[property])
          break;
        case 'salary':
          let salary = data[property]

          if (salary === 'less than 500 lv.') {
            this.ads = this.ads.filter(a => Number(a.salary) < 500)
          } else if (salary === 'from 500 to 1000 lv.') {
            this.ads = this.ads.filter(a => Number(a.salary) >= 500 && Number(a.salary) <= 1000)
          } else if (salary === 'from 1000 to 1500 lv.') {
            this.ads = this.ads.filter(a => Number(a.salary) >= 1000 && Number(a.salary) <= 1500)
          } else if (salary === 'from 1500 to 2000 lv.') {
            this.ads = this.ads.filter(a => Number(a.salary) >= 1500 && Number(a.salary) <= 2000)
          } else if (salary === 'from 2000 to 3000 lv.') {
            this.ads = this.ads.filter(a => Number(a.salary) >= 2000 && Number(a.salary) <= 3000)
          } else if (salary === 'from 3000 to 5000 lv.') {
            this.ads = this.ads.filter(a => Number(a.salary) >= 3000 && Number(a.salary) <= 5000)
          } else if (salary === 'more than 5000 lv.') {
            this.ads = this.ads.filter(a => Number(a.salary) > 5000)
          }
          break;
      }
    }
  }
}