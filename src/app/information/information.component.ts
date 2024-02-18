import { Component } from '@angular/core';
import { InformationService } from '../information.service';
import { LoginService } from '../login.service';

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
      userUuid: ''
      // ... other properties
    };

    constructor(
      private informationService: InformationService,
      private loginService: LoginService
    ) {}
  
    ngOnInit() {
      // Get the UUID from the LoginService instance
      this.info.userUuid = this.loginService.getUUID();
      // console.log("herer")
      // console.log("uuid" , this.loginService.getUUID())
    }
    submitForm() {
    // this.info.userUuid = this.loginService.getUUID();
    // console.log(this.loginService.getUUID())
    this.informationService.addInfo(this.info).subscribe((data) => {
    console.log(data);
    });
  }
    
}
