import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { Poll } from '../../../core/Poll'
import { PollService } from '../../../services/poll.service'

@Component({
  templateUrl: './polls.component.html',
  styleUrls: [ './polls.component.css' ]
})
export class PollsComponent implements OnInit {
  polls: Poll[]

  constructor(
    private pollService: PollService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.pollService.pollList().subscribe(data => {
      this.polls = data
    })
  }

  getNewPoll(data) {
    this.polls.push(data.newPoll)
  }

  savePoll(poll) {
    this.pollService.makeActive(poll)
  }

  deletePoll(poll) {
    this.pollService.deletePoll(poll).subscribe((data : any) => {
      if (data.success) {
        this.polls.splice(this.polls.indexOf(poll), 1)
        this.toastr.success('Deleted success.')
      }
    })
  }
}