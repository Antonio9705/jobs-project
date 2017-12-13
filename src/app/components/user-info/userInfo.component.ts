import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'user-info',
  templateUrl: './userInfo.component.html',
  styleUrls: ['./userInfo.component.css']
})
export class UserInfoComponent implements OnInit {
  countUserAds: string
  username: string

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getLoggedUserInfo().subscribe(data => {
      this.countUserAds = data
    })

    if (this.authService.isLogged()) {
      this.authService.loadLoggedUserInfo()
    }

    this.authService.changeUsername().subscribe(data => {
      this.username = data
    })
  }
}