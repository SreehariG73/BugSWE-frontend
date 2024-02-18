import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private baseUrl = 'http://localhost:8080/user/skill/add';
  constructor(private http: HttpClient) { }

  addSkills(skills: Object) {
    return this.http.post(`${this.baseUrl}`, skills);
  }
}
