import { Component, OnInit } from '@angular/core'
import { Poll } from './Poll';
import { PollService } from './../../services/poll.service'
import { ToastrService } from 'toastr-ng2';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: [ './poll.component.css' ]
})
export class PollComponent implements OnInit {
  currentPoll: Poll
  answerText: string

  constructor(
    public pollService: PollService,
    private toastrService: ToastrService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.pollService.getActivePoll().subscribe(data => this.currentPoll = data)
  }

  createVote() {
    if (!this.answerText) {
      this.toastrService.error('Please, check answer!')
      return
    }

    this.pollService.createVote({
      id: this.currentPoll._id, 
      userId: localStorage.getItem('userId'), 
      answer: this.answerText
    })
  }
}