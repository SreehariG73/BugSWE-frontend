import { Component } from '@angular/core';

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

  removeEducationBlock(index: number) {
    this.educationBlocks.splice(index, 1);
  }

}
