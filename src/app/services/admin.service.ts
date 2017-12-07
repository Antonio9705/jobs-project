import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';
import { User } from './../components/pages/admin/users/User'

@Injectable()
export class AdminService {
  url: string = 'http://localhost:3000';

  constructor(private http : HttpClient) {}

  allUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url + '/allUsers', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}