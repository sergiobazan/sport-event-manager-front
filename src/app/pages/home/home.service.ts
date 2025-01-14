import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Event } from './models/Event';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = `${environment.apiUrl}/events`

  constructor(private http: HttpClient) { }

  getAllEvents() {
    return this.http.get<Event[]>(this.apiUrl);
  }
}
