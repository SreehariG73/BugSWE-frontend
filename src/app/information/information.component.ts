import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { LoginService } from '../login.service';
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
      zipCode: '',
      userUuid: '',
      role: ''
      // ... other properties
    };
    constructor(
      private informationService: InformationService,
      private loginService: LoginService
    ) {}
  
    ngOnInit() {
      this.info.userUuid = this.loginService.getUUID();
    }
  
    submitForm(informationForm: NgForm) {
      if (informationForm.valid) {
        this.informationService.addInfo(this.info).subscribe((data) => {
          console.log(data);
        });
      }
    }
  }