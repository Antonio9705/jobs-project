import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { AdsService } from '../../../services/ads.service'

@Component({
  templateUrl: './ad-delete.component.html',
  styleUrls: [ './ad-delete.component.css' ]
})
export class AdDeleteComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adsService: AdsService
  ) {}

  deleteAd() {
    this.adsService.deleteAd(this.route.snapshot.params['id'])
  }

  returnLastPage() {
    this.adsService.returnLastPage()
  }
}