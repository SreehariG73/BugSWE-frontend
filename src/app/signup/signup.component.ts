import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    dob: '',
    isRecruiter: false
  }
  constructor(private signupService: SignupService) { }
  onSubmit(form: NgForm) {
    this.signupService.signup(this.user).subscribe((data: any) => {
      form.reset();
      console.log(data);
    });
  }

}
