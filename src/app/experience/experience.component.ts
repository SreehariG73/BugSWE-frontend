import { Component } from '@angular/core';
import { AddexperienceService } from '../addexperience.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    experienceBlocks = {
      userUuid: '',
      experienceDetails: [
        {
        positionName: '',
        companyName: '',
        city: '',
        country: '',
        startDate: '',
        endDate: '',
        details: ''
        }
      ]
    };
  
    addExperienceBlock() {
      this.experienceBlocks.experienceDetails.push({
        positionName: '',
        companyName: '',
        city: '',
        country: '',
        startDate: '',
        endDate: '',
        details: ''
        
      });
    }
  
    removeExperienceBlock(index: number) {
      this.experienceBlocks.experienceDetails.splice(index, 1);
    }
    constructor(
      private addexperienceService:AddexperienceService,
      private loginService: LoginService
      ) { }
      ngOnInit() {
        // Get the UUID from the LoginService instance
        this.experienceBlocks.userUuid = this.loginService.getUUID();
        // console.log("herer")
        // console.log("uuid" , this.loginService.getUUID())
      }
    submitForm() {
    this.addexperienceService.addexperience(this.experienceBlocks).subscribe((data) => {
      console.log(data);
    });
}
}