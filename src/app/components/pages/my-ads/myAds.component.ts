import { Component, OnInit } from '@angular/core'
import { AdsService } from '../../../services/ads.service'
import { Ad } from '../ads-create/Ad'
import { Router } from '@angular/router'

@Component({
  templateUrl: './myAds.component.html',
  styleUrls: [ './myAds.component.css' ]
})
export class MyAdsComponent implements OnInit {
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