import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };
constructor(private loginService: LoginService) { }
  submitForm(form: NgForm) {
    // Handle login logic using this.credentials
      this.loginService.login(this.credentials).subscribe((data:any) => {
        form.reset();
        // console.log(data);
        if (data["message"] === 'User Logged in successfully') {
          console.log(data["data"].uuid);
          console.log("User Logged in Successfully");
          this.loginService.setUUID(data["data"].uuid);
        }
      
        // console.log(this.loginService.getUUID());
      });

    // console.log('Login form submitted!', this.credentials);
  
}
}