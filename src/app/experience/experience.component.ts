import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddexperienceService } from '../addexperience.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    experienceBlocks: any[] = [];
  
    addExperienceBlock() {
      this.experienceBlocks.push({
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        details: ''
      });
    }
  
    removeExperienceBlock(index: number) {
      this.experienceBlocks.splice(index, 1);
    }
    constructor(private addexperienceService:AddexperienceService) { }
    onSubmit(form: NgForm) {
    this.addexperienceService.addexperience(this.experienceBlocks).subscribe((data) => {
      console.log(data);
    });
}
}