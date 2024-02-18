import { Component } from '@angular/core';
import { AddlinksService } from '../addlinks.service';
import { NgForm } from '@angular/forms';

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
  
    constructor(private addLinksService: AddlinksService) {}
    submitForm() {
      this.addLinksService.addlinks(this.links).subscribe((data) => {
        console.log(data);
      });
    }
  }