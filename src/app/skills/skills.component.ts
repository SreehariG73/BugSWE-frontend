import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  sskillsList: string[] = ['HTML', 'CSS', 'JavaScript']; // Replace with actual skills from your database
  selectedSkill: string = '';
  selectedSkillsList: string[] = [];

  addSelectedSkill() {
    if (this.selectedSkill && !this.selectedSkillsList.includes(this.selectedSkill)) {
      this.selectedSkillsList.push(this.selectedSkill);
      this.selectedSkill = ''; // Clear the selected skill after adding
    }
  }

  removeSelectedSkill(index: number) {
    this.selectedSkillsList.splice(index, 1);
  }

  submitForm() {
    // Handle form submission logic using this.selectedSkillsList
    console.log('Skills form submitted!', this.selectedSkillsList);
  }

}
