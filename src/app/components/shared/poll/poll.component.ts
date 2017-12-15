import { Component, OnInit } from '@angular/core'
import { DecimalPipe } from '@angular/common'
import { ToastrService } from 'toastr-ng2'
import { Poll } from '../../../core/Poll'
import { PollService } from '../../../services/poll.service'
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  currentPoll: Poll
  answerText: string
  pollAllVotes: number

  constructor(
    public pollService: PollService,
    private toastrService: ToastrService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.pollService.getActivePoll().subscribe((data : any) => {
      this.currentPoll = data
      this.pollAllVotes = 0

      for (let answer of data.answers) {
        this.pollAllVotes += answer.votes
      }
    })
  }

  createVote() {
    if (!this.answerText) {
      this.toastrService.error('Please, check answer!')
      return
    }

    this.pollService.createVote({
      id: this.currentPoll._id,
      userId: sessionStorage.getItem('userId'),
      answer: this.answerText
    })
  }
}