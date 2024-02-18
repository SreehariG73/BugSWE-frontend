import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddexperienceService {
  private baseUrl = 'http://localhost:8080/user/experience/create';
  constructor(private http:HttpClient) {
   }

    addexperience(experienceBlocks: Object){
      return this.http.post(`${this.baseUrl}`, experienceBlocks);
    }
  }
