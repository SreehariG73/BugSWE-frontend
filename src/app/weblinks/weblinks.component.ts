import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrl: './weblinks.component.css'
})
export class WeblinksComponent {
    githubLink: string = '';
    portfolioLink: string = '';
    linkedinLink: string = '';
  
    constructor(private router: Router) {}
  
    submitForm() {
      // Handle form submission logic using the link values
      console.log('Links form submitted!', {
        github: this.githubLink,
        portfolio: this.portfolioLink,
        linkedin: this.linkedinLink
      });
  
      // Redirect to the dashboard or the desired route
      this.router.navigate(['/dashboard']);
    }
  }