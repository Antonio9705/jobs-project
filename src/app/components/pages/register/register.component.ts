import { Component } from '@angular/core'
import { AuthService } from './../../../services/auth.service'
import { ToastrService } from 'toastr-ng2';
import { Router } from '@angular/router'

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string;
  password: string;
  repeatPass: string;
  firstName: string;
  lastName: string;
  email: string;
  
  emailPattern: RegExp = new RegExp("(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))")

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onSubmit(event) {
    const user = {
      username: this.username,
      password: this.password,
      repeatPass: this.repeatPass,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    }

    this.authService.register(user).subscribe(data => {
      if (data.success) {
        this.authService.saveData(data)
        this.toastr.success(data.message)
        this.router.navigate([''])
      }
    },
      err => {
        this.toastr.error(err.error.message)
      })
  }
}