import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private uuid:String = '';
  constructor(private http: HttpClient) { }
  getUUID(){
    return this.uuid;
   }
  setUUID(uuid:String){
    this.uuid = uuid;
  }
  private baseUrl = 'http://localhost:8080/user/login';
  
  login(credentials: Object){
    return this.http.post(`${this.baseUrl}`, credentials);
  }

}
