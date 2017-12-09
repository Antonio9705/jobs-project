import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { headersWithoutAuthorization, baseUrl } from './../config/config'

@Injectable()
export class AuthService {
  private username: Subject<string> = new Subject<string>()

  constructor(private http : HttpClient) {}

  changeUsername() : Observable<string> {
    return this.username.asObservable()
  }

  register(user) : Observable<any> {
    return this.http.post(baseUrl + '/register', user, {
      headers: headersWithoutAuthorization
    })
  }

  login(username, password) : Observable<any> {
    const user = {
      username,
      password
    }
    
    return this.http.post(baseUrl + '/login', user, {
      headers: headersWithoutAuthorization
    })
  }

  logout() {
    sessionStorage.clear()
    return this.http.post(baseUrl + '/logout', null)
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
    sessionStorage.setItem('username', data.user.username)
    sessionStorage.setItem('firstName', data.user.firstName)
    sessionStorage.setItem('token', data.user.token)
    sessionStorage.setItem('userId', data.user.userId)
    sessionStorage.setItem('userRoles', JSON.stringify(data.user.userRoles))
  }
}