import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
    info = {
      phoneNumber: '',
      type: 'HOME',
      streetAddress: '',
      city: '',
      state: '',
      country: '',
      zipCode: ''
      // ... other properties
    };
  
    
    constructor(private informationService: InformationService) { }
    submitForm() {
    this.informationService.addInfo(this.info).subscribe((data) => {
    console.log(data);
    });
  }
    
}
