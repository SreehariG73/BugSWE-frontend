import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
    info = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      phoneType: 'home',
      streetAddress: '',
      city: '',
      state: '',
      country: '',
      zipCode: ''
      // ... other properties
    };
  
    submitForm() {
      // Handle form submission logic using this.info
      console.log('Information form submitted!', this.info);
    }

}
