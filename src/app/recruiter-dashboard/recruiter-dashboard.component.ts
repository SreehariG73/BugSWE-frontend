import { Component } from '@angular/core';
import { FetchrecruiterdashboardService } from '../services/fetchrecruiterdashboard.service';
import { FetchskillsService } from '../services/fetchskills.service';import { Router } from '@angular/router';
;

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrl: './recruiter-dashboard.component.css'
})
export class RecruiterDashboardComponent {
  filter = {
    role: '',
    location: '',
    experience: '',
    skills: ''
  };
  showModal: boolean = false;
  candidates: any[] = [];
  closeModal() {
    this.showModal = false;
  }
  constructor(private fetchrecruiterdashboard: FetchrecruiterdashboardService, private fetchskillsservice: FetchskillsService, private router: Router) { }
  ngOnInit() {
    this.fetchskillsservice.fetchSkills().subscribe((data: any) => {
      console.log(data['data'].skills);
      this.filter.skills = data['data'].skills;
    });
  }
  searchCandidates() {
    this.fetchrecruiterdashboard.fetchRecruiterDashboard(this.filter).subscribe((data: any) => {
      console.log(data);
      if(data['data'].length >0){
      for (let i = 0; i < data['data'].length; i++) {
        this.candidates.push(data['data'][i]);
      }
      this.showModal = true;
      }
      else {
        this.showModal = false;
      }
      // this.candidates = data;
      // this.showModal = true;
    });
  }
  logout() {

    this.router.navigate(['/login']);
  }
}