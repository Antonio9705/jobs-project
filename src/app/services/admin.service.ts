import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { User } from './../components/pages/admin/users/User'
import { ToastrService } from 'toastr-ng2'
import { headersWithAuthorization, baseUrl } from './../config/config'

@Injectable()
export class AdminService {
  constructor(
    private http : HttpClient,
    private toastr: ToastrService
  ) {}

  allUsers() : Observable<User[]> {
    return this.http.get<User[]>(baseUrl + '/user/all', {
      headers: headersWithAuthorization
    })
  }

  changeRole(payload) : Observable<any> {
    return this.http.post<any>(baseUrl + '/user/changeRole', payload, {
      headers: headersWithAuthorization
    })
  }
}