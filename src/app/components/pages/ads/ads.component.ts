import { Component, OnInit } from '@angular/core'
import { AdsService } from '../../../services/ads.service';
import { Ad } from '../ads-create/Ad';

@Component({
  templateUrl: './ads.component.html',
  styleUrls: [ './ads.component.css' ]
})
export class AdsComponent implements OnInit {
  ads: Ad[]

  constructor(private adsService : AdsService) {}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}