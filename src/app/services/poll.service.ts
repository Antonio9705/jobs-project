import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';
import { Poll } from '../components/poll/Poll'
import { AuthService } from './auth.service'
import { baseUrl } from './../config/config'

@Injectable()
export class PollService {
  private pollSubject: Subject<Poll> = new Subject<Poll>()

  constructor(
    private http : HttpClient,
    private authService: AuthService
  ) {}

  isUserVote(poll) : boolean {
    if (!this.authService.isLogged) {
      return false
    }

    if (poll.votedUsers.indexOf(sessionStorage.getItem('userId')) > -1) {
      return true
    }

    return false
  }

  makeActive(poll) : void {
    this.http.post<any>(baseUrl + '/poll/makeActive', poll, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    }).subscribe(data => {
      this.pollSubject.next(data.poll)
    })
  }

  deletePoll(poll) : Observable<Object> {
    return this.http.delete(baseUrl + `/poll/delete/${poll._id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
  }

  getActivePoll() : Observable<Poll> {
    this.pollList().subscribe(polls => {
      for (let poll of polls) {
        if (poll.isActive) {
          this.pollSubject.next(poll)
          break
        }
      }
    })
    
    return this.pollSubject.asObservable()
  }

  pollList(): Observable<Poll[]> {
    return this.http.get<Array<Poll>>(baseUrl + '/polls', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  createPoll(poll : Object) : Observable<any> {
    return this.http.post(baseUrl + '/poll/create', poll, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
  }

  createVote(payload) : void {
    this.http.post(baseUrl + '/poll/vote', payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    }).subscribe(data => {
      this.getActivePoll()
    })
  }
}