import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private baseUrl = 'http://localhost:8080/user-info/create';
  constructor(private http:HttpClient) {
   }

    addInfo(info: Object){
      return this.http.post(`${this.baseUrl}`, info);
    }
}


