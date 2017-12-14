import { Component, OnInit } from '@angular/core'
import { AdsService } from '../../../services/ads.service'
import { Router } from '@angular/router'
import { Ad } from '../../../models/Ad'

@Component({
  templateUrl: './my-ads-list.component.html',
  styleUrls: [ './my-ads-list.component.css' ]
})
export class MyAdsListComponent implements OnInit {
  ads: Ad[]

  constructor(
    private adsService: AdsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adsService.getAds().subscribe(data => {
      data = data.filter(a => a.publisher === sessionStorage.getItem('userId'))
      this.ads = data
      this.router.navigate([ 'ads/own' ])
    })

    this.adsService.listAds()
  }
}