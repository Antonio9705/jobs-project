import { Component, Output, EventEmitter } from '@angular/core'
import { AuthService } from './../../../services/auth.service'
import { Observable } from 'rxjs/Observable'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.html'],
  providers: []
})
export class LoginComponent {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  onSubmit(event) {
    this.authService.login(this.username, this.password)
      .subscribe(data => {
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