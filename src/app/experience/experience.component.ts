import { Component } from '@angular/core';

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
}

