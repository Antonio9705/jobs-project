import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { ToastrService } from 'toastr-ng2'
import { Category } from '../components/pages/admin/category/Category'
import { baseUrl } from './../config/config'
import { Ad } from '../components/pages/ads-create/Ad'
import * as _ from 'underscore'

@Injectable()
export class PagerService {
  constructor(private http: HttpClient) { }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5) {
    let totalPages = Math.ceil(totalItems / pageSize)

    let startPage: number, endPage: number

    if (totalPages <= 10) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 6) {
        startPage = 1
        endPage = 10
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9
        endPage = totalPages
      } else {
        startPage = currentPage - 5
        endPage = currentPage + 4
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    let pages = _.range(startPage, endPage + 1)

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    }
  }
}