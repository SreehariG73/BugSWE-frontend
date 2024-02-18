import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchskillsService {
  private baseUrl = 'http://localhost:8080/user/skill';
  constructor(private http:HttpClient) { }

  fetchSkills(){
    return this.http.get(`${this.baseUrl}`);
  }
}
