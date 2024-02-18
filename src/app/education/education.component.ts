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
    educationdetails: [
      {
        university: '',
        degree: '',
        major: '',
        startDate: '',
        endDate: '',
        present: false,
        gpa: ''
      }
    ]
  };
  addEducationBlock() {
    this.educationBlocks.educationdetails.push({
      university: '',
      degree: '',
      major: '',
      startDate: '',
      endDate: '',
      present: false,
      gpa: ''
    });
  }
  constructor(
    private addeducationService:AddeducationService, 
    private loginService: LoginService
    ) { }
    ngOnInit() {
      // Get the UUID from the LoginService instance
      this.educationBlocks.userUuid = this.loginService.getUUID();
      // console.log("herer")
      // console.log("uuid" , this.loginService.getUUID())
    }    
  onSubmit(form: NgForm) {
    this.addeducationService.addeducation(this.educationBlocks).subscribe((data) => {
      console.log(data);
    });
  }

  removeEducationBlock(index: number) {
    this.educationBlocks.educationdetails.splice(index, 1);
  }

}
