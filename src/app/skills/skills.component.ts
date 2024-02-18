import { Component } from '@angular/core';
import { FetchskillsService } from '../services/fetchskills.service';
import { SkillsService } from '../services/skills.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  sskillsList: string[] = ['HTML', 'CSS', 'JavaScript']; // Replace with actual skills from your database
  selectedSkill: string = '';
  skilldata={
    userUuid: '',
    skills: [] as string[]
  }

  constructor(
    private fetchskills: FetchskillsService, 
    private skills:SkillsService, 
    private loginService: LoginService) {}
  ngOnInit(){
    this.fetchskills.fetchSkills().subscribe((data: any) => {
      console.log(data['data'].skills);
      this.sskillsList = data['data'].skills;
    });
    this.skilldata.userUuid = this.loginService.getUUID();
  }

  addSelectedSkill() {
    if (this.selectedSkill && !this.skilldata.skills.includes(this.selectedSkill)) {
      this.skilldata.skills.push(this.selectedSkill);
      this.selectedSkill = ''; // Clear the selected skill after adding
    }
  }

  // selectedSkillsList: any[] = []; // Initialize selectedSkillsList as an empty array of type any

  removeSelectedSkill(index: number) {
    this.skilldata.skills.splice(index, 1);
  }

  submitForm() {
    // Handle form submission logic using this.selectedSkillsList
    // this.skilldata.skills = this.selectedSkillsList as []; // Update the type to any[]
    this.skilldata.skills = this.skilldata.skills.flat();
    this.skills.addSkills(this.skilldata).subscribe((data) => {
      console.log(data);
    });
    console.log('Skills form submitted!', this.skilldata.skills); // Fix the typo in the property name
  }

}
