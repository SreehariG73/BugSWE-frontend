import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddeducationService } from '../addeducation.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
   
  educationBlocks = {
    userUuid: '',
    educationDetails: [
      {
        universityName: '',
        degree: '',
        major: '',
        startDate: '',
        endDate: '',
        city: '',
        gpa: ''
      }
    ]
  };
  addEducationBlock() {
    this.educationBlocks.educationDetails.push({
      universityName: '',
      degree: '',
      major: '',
      startDate: '',
      endDate: '',
      city: '',
      gpa: ''
    });
  }
  constructor(
    private addeducationService:AddeducationService, 
    private loginService: LoginService
    ) { }
    ngOnInit() {
      this.educationBlocks.userUuid = this.loginService.getUUID();
    }    
  submitForm(educationForm: NgForm) {
    if (educationForm.valid) {
      this.addeducationService.addeducation(this.educationBlocks).subscribe((data) => {
        console.log(data);
      });
    } else {
      console.log('Form is not valid. Please fill in all required fields.');
    }
  }

  removeEducationBlock(index: number) {
    this.educationBlocks.educationDetails.splice(index, 1);
  }

}
