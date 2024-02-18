import { Component } from '@angular/core';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrl: './recruiter-dashboard.component.css'
})
export class RecruiterDashboardComponent {
  selectedJobRole: string = '';
  selectedExperience: string = '';
  selectedState: string = '';
  selectedSkill: string = '';
  showModal: boolean = false;
  candidates: any[] = [];
  searchCandidates(){}
  closeModal() {
    this.showModal = false;
  }
}

