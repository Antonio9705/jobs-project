import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';
import { Poll } from '../components/poll/Poll';
import { AuthService } from './auth.service'

@Injectable()
export class PollService {
  url: string = 'http://localhost:3000';
  private pollSubject: Subject<Poll> = new Subject<Poll>()

  constructor(
    private http : HttpClient,
    private authService: AuthService
  ) {}

  isUserVote(poll) : boolean {
    if (!this.authService.isLogged) {
      return false
    }

    if (poll.votedUsers.indexOf(localStorage.getItem('userId')) > -1) {
      return true
    }

    return false
  }

  makeActive(poll) : void {
    this.http.post<any>(this.url + '/poll/makeActive', poll, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(data => {
      this.pollSubject.next(data.poll)
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
    return this.http.get<Array<Poll>>(this.url + '/polls', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  createPoll(poll : Object) : Observable<any> {
    return this.http.post(this.url + '/poll/create', poll, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  createVote(payload) : void {
    this.http.post(this.url + '/poll/vote', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(data => {
      this.getActivePoll()
    })
  }
}