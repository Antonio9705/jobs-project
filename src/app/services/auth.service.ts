import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { baseUrl } from './../config/config'
import { ToastrService } from 'toastr-ng2'

@Injectable()
export class AuthService {
  private token: string
  private username: Subject<string> = new Subject<string>()
  private countUserAds: Subject<string> = new Subject<string>()

  constructor(
    private http : HttpClient,
    private toastr: ToastrService
  ) {}

  getLoggedUserInfo() : Observable<string> {
    return this.countUserAds.asObservable()
  }

  loadLoggedUserInfo() : void {
    this.http.get(baseUrl + `/user/info/${sessionStorage.getItem('userId')}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe((data: any) => {
      if (data.success) {
        this.countUserAds.next(`${data.counter}`)
      } else {
        this.countUserAds.next(undefined)
      }
    })
  }

  changeUsername() : Observable<string> {
    return this.username.asObservable()
  }

  register(user) : Observable<any> {
    return this.http.post(baseUrl + '/register', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  login(username, password) : Observable<any> {
    const user = {
      username,
      password
    }
    
    return this.http.post(baseUrl + '/login', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  logout() : void {
    sessionStorage.clear()
    this.token = undefined
    this.http.post(baseUrl + '/logout', null)
    this.countUserAds.next(undefined)
    this.toastr.success('GoodBye!')
  }

  isLogged() : boolean {
    if (sessionStorage.getItem('token')) {
      this.username.next(sessionStorage.getItem('username'))
      return true
    }

    this.username.next(undefined)
    return false
  }

  isAdmin() : boolean {
    if (!this.isLogged) {
      return false
    }

    let currentLoggedUserRoles : Array<string> = JSON.parse(sessionStorage.getItem('userRoles'))

    if (currentLoggedUserRoles === null) {
      return false
    }
    
    if (currentLoggedUserRoles.indexOf('Admin') > -1) {
      return true
    }

    return false
  }

  saveData(data) : void {
    this.token = data.user.token
    sessionStorage.setItem('username', data.user.username)
    sessionStorage.setItem('firstName', data.user.firstName)
    sessionStorage.setItem('token', data.user.token)
    sessionStorage.setItem('userId', data.user.userId)
    sessionStorage.setItem('userRoles', JSON.stringify(data.user.userRoles))
    this.loadLoggedUserInfo()
  }
}