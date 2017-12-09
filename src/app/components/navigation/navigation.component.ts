import { Component, OnInit } from '@angular/core'
import { AuthService } from './../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.css' ]
})
export class NavigationComponent implements OnInit {
  private authService: AuthService;
  private router: Router
  username: string;

  constructor(
    authService: AuthService, 
    router: Router
  ) {
    this.authService = authService;
    this.router = router;  
  }

  ngOnInit(): void {
    this.authService.changeUsername().subscribe(data => this.username = data)
  }

  logout() {
    this.router.navigate([ '' ])
    this.authService.logout()
  }
}