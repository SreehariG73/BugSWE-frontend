import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoluntaryDisclosureService {
  private baseUrl = 'http://localhost:8080/user/voluntary-disclouser/create';

  constructor(private http:HttpClient) { }

  addvoluntaryDisclosure(voluntaryDisclosure: Object){
    return this.http.post(`${this.baseUrl}`, voluntaryDisclosure);
  }
}
