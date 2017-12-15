import { Component, Output, EventEmitter } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { Poll } from '../../../../core/Poll'
import { PollService } from '../../../../services/poll.service'

@Component({
  selector: 'create-poll-form',
  templateUrl: './create-poll-form.component.html',
  styleUrls: [ './create-poll-form.component.css' ]
})
export class CreatePollFormComponent {
  @Output() pollEvent = new EventEmitter<Poll>()
  question: string
  answersCount: number
  answers: string[]

  constructor(
    private toastr: ToastrService,
    private pollService: PollService
  ) {
    this.question = ''
    this.answersCount = 0
    this.answers = []
  }

  createRange(number) {
    let items: number[] = [];
    for(let i = 1; i <= number; i++) {
       items.push(i)
    }
    return items
  }

  onSubmit() {
    if (this.answersCount < 2) {
      this.toastr.error('Poll\'s answers must be at least two.')
      return
    }

    if (this.question.length < 10) {
      this.toastr.error('Poll question must be at least 10 symbols long.')
      return
    }

    if (this.answersCount < this.answers.length) {
      this.answers = this.answers.slice(0, this.answersCount)
    }

    let poll = {
      question: this.question,
      answers: this.answers
    }
 


    this.pollService.createPoll(poll).subscribe(data => {
      if (data.success) {
        this.toastr.success(data.message)
        this.question = ''
        this.answersCount = 0
        this.answers = []
        this.pollEvent.emit(data)
      }
    })
  }
}