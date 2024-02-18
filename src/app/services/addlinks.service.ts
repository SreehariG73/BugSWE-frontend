import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddlinksService {
  private baseUrl = 'http://localhost:8080/links/create';
  constructor(private http:HttpClient) {
   }

    addlinks(links: Object){
      return this.http.post(`${this.baseUrl}`, links);
    }
}