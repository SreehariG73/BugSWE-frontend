import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddeducationService {
  private baseUrl = 'http://localhost:8080/user/education/create';
  constructor(private http: HttpClient) {
   }

    addeducation(educationBlocks: Object){
      return this.http.post(`${this.baseUrl}`, educationBlocks);
    }
}
