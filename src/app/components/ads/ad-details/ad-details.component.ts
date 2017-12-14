import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AdsService } from '../../../services/ads.service'
import { Ad } from '../../../models/Ad'

@Component({
  templateUrl: './ad-details.component.html',
  styleUrls: [ './ad-details.component.css' ]
})
export class AdDetailsComponent implements OnInit {
  ad: Ad 

  constructor(
    private route: ActivatedRoute,
    private adsService: AdsService
  ) {}

  ngOnInit(): void {
    this.adsService.getById(this.route.snapshot.params['id'])
      .subscribe((data : any) => {
        if (data.success) {
          this.ad = data.ad
        }
      })
  }
}