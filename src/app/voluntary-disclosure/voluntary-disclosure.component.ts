import { Component } from '@angular/core';
import { VoluntaryDisclosureService } from '../voluntary-disclosure.service';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-voluntary-disclosure',
  templateUrl: './voluntary-disclosure.component.html',
  styleUrl: './voluntary-disclosure.component.css'
})
export class VoluntaryDisclosureComponent {
  voluntaryDisclosure = {
  userUuid: '',
  gender: '',
  ethinicity: '',
  veteranStatus: '',
  disabled: ''
  }
  constructor(private voluntaryDisclosureServices: VoluntaryDisclosureService,
    private loginService: LoginService ) { }
  ngOnInit() {
    // Get the UUID from the LoginService instance
    this.voluntaryDisclosure.userUuid = this.loginService.getUUID();
  }
  submitForm(form: NgForm) {
      this.voluntaryDisclosureServices.addvoluntaryDisclosure(this.voluntaryDisclosure).subscribe((data: any) => {
      console.log(data);
    });
  }
}
