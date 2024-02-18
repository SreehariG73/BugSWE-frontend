import { Component } from '@angular/core';
import { AddlinksService } from '../addlinks.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrl: './weblinks.component.css'
})
export class WeblinksComponent {
  links={
    githubLink:  '',
    portfolioLink:'',
    linkedinLink:''
  };
  
  
  constructor(private addLinksService: AddlinksService, private router: Router) {}
    submitForm() {
      this.addLinksService.addlinks(this.links).subscribe((data) => {
        console.log(data);
       this.router.navigate(['/dashboard']);
      
      });
    }
  }