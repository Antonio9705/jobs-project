import { Component, OnInit } from '@angular/core'
import { User } from './User';
import { AdminService } from './../../../../services/admin.service'

@Component({
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {
  allUsers: User[]

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.allUsers().subscribe(data => this.allUsers = data)
  }
}