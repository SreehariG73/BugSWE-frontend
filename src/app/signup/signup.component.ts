import { Component } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    username: '',
    password: '',
    email: '',
    dob: '',
    isrecruiter: false
  }
  constructor(private signupService: SignupService) { }
  onSubmit() {
      console.log(this.user);
    this.signupService.signup(this.user).subscribe((data) => {
      console.log(data);
    });
  }

}
