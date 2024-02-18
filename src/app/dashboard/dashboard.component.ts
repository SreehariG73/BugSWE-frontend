import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  firstName: string = '';
  constructor(private router: Router, private loginService: LoginService) { }
  ngOnInit() {
  this.firstName = this.loginService.getfirstName();
  }
  logout() {
    this.loginService.setUUID('');
    this.router.navigate(['/login']);
  }

}
