import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddeducationService } from '../addeducation.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
   
  educationBlocks: any[] = [];

  addEducationBlock() {
    this.educationBlocks.push({
      university: '',
      degree: '',
      major: '',
      startDate: '',
      endDate: '',
      present: false,
      gpa: ''
    });
  }
  constructor(private addeducationService:AddeducationService) { }
  onSubmit(form: NgForm) {
    this.addeducationService.addeducation(this.educationBlocks).subscribe((data) => {
      console.log(data);
    });
  }

  removeEducationBlock(index: number) {
    this.educationBlocks.splice(index, 1);
  }

}
