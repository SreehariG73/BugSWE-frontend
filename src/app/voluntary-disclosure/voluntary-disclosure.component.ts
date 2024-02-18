import { Component } from '@angular/core';

@Component({
  selector: 'app-voluntary-disclosure',
  templateUrl: './voluntary-disclosure.component.html',
  styleUrl: './voluntary-disclosure.component.css'
})
export class VoluntaryDisclosureComponent {
  selectedGender: string = '';
  selectedEthnicity: string = '';
  selectedVeteranStatus: string = '';
  selectedDisability: string = '';

  submitForm() {
    // Handle form submission logic using selected values
    console.log('Information form submitted!', {
      gender: this.selectedGender,
      ethnicity: this.selectedEthnicity,
      veteranStatus: this.selectedVeteranStatus,
      disability: this.selectedDisability
    });
  }
}
