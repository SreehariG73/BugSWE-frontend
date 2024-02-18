import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private uuid:string = '';
  private firstName:string = '';
  constructor(private http: HttpClient) { }
  public getUUID(){
    return this.uuid;
   }
  public setUUID(uuid:string){
    this.uuid = uuid;
  }
  public setfirstName(firstName:string){
    this.firstName = firstName;
  }
  public getfirstName(){
    return this.firstName;
  }
  private baseUrl = 'http://localhost:8080/user/login';
  
  login(credentials: Object){
    return this.http.post(`${this.baseUrl}`, credentials);
  }

}
