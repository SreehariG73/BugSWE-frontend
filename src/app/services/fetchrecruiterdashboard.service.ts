import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchrecruiterdashboardService {

  private baseUrl = 'http://localhost:8080/user/filter';
  constructor(private http: HttpClient) { }

  fetchRecruiterDashboard(filter: any){
    return this.http.get(`${this.baseUrl}`, {params: {role: filter.role, location: filter.location, experience: filter.experience, skills: filter.skills}});
  }

}
