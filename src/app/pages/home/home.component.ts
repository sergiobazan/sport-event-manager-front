import { Component, OnInit } from '@angular/core';
import { Event } from './models/Event';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  events: Event[] = [];

  constructor(private service: HomeService) {}
  
  ngOnInit(): void {
    this.getEvents();
  }


  private getEvents() {
    this.service.getAllEvents().subscribe({
      next: (response) => {
        if (response.length) {
          this.events = response;
        }
      },
      error: ({error}) => console.error(error)
    })
  }
}
