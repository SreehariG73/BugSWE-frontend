import { Component } from '@angular/core';
import { AddlinksService } from '../addlinks.service';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrl: './weblinks.component.css'
})
export class WeblinksComponent {
  links={
    userUuid: '',
    githubUrl:  '',
    resumeUrl: '',
    linkedInUrl: ''
  };
  
    constructor(
      private addLinksService: AddlinksService,
      private LoginService: LoginService,
      private router: Router
      ) {}

    ngOnInit() {
      this.links.userUuid = this.LoginService.getUUID();
    }
    submitForm() {
      this.addLinksService.addlinks(this.links).subscribe((data) => {
        console.log(data);
       this.router.navigate(['/dashboard']);
      
      });
    }
  }