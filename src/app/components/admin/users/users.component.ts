import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { User } from '../../../core/User'
import { AdminService } from '../../../services/admin.service'

@Component({
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {
  allUsers: User[]
  roles: string[]
  role: string
  defaultRole: string
  userId: string

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) {
    this.roles = [ '', 'User', 'Admin' ]
    this.defaultRole = 'User'
  }

  ngOnInit(): void {
    this.adminService.allUsers().subscribe(data => this.allUsers = data)
  }

  changeUserRole(userId) {
    if (this.role === '' || this.role === undefined) {
      this.toastr.error('Please select role: User or Admin')
      return
    }

    if (userId !== this.userId) {
      this.toastr.error('You save incorrect person!')
      return
    }

    this.adminService.changeRole({id: userId, role: this.role})
      .subscribe(data => {
        if (data.success) {
          this.toastr.success(data.message)
        }
      })
  }

  onChange(role, userId) {
    this.userId = userId
    this.role = role
  }
}