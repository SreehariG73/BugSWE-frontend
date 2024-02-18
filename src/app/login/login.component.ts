import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  submitForm() {
    // Handle login logic using this.credentials
    console.log('Login form submitted!', this.credentials);
  }
}

