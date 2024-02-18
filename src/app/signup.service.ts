import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  private baseUrl = 'http://localhost:8080/user/signup';
  constructor(private http:HttpClient) {
   }
   
    signup(user: Object){
      return this.http.post(`${this.baseUrl}`, user);
    }
}
