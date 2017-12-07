import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  url: string = 'http://localhost:3000'
  private username: Subject<string> = new Subject<string>()

  constructor(private http : HttpClient) {}

  changeUsername() : Observable<string> {
    return this.username.asObservable()
  }

  register(user) : Observable<any> {
    return this.http.post(this.url + '/register', user, {
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
    
    return this.http.post(this.url + '/login', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  logout() {
    localStorage.clear()
    return this.http.post(this.url + '/logout', null)
  }

  isLogged() : boolean {
    if (localStorage.getItem('token')) {
      this.username.next(localStorage.getItem('username'))
      return true
    }

    this.username.next(undefined)
    return false
  }

  isAdmin() : boolean {
    if (!this.isLogged) {
      return false
    }

    let currentLoggedUserRoles : Array<string> = JSON.parse(localStorage.getItem('userRoles'))

    if (currentLoggedUserRoles === null) {
      return false
    }
    
    if (currentLoggedUserRoles.indexOf('Admin') > -1) {
      return true
    }

    return false
  }

  saveData(data) : void {
    localStorage.setItem('username', data.user.username)
    localStorage.setItem('firstName', data.user.firstName)
    localStorage.setItem('token', data.user.token)
    localStorage.setItem('userId', data.user.userId)
    localStorage.setItem('userRoles', JSON.stringify(data.user.userRoles))
  }
}