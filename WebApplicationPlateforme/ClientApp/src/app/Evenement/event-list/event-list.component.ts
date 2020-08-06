import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../../shared/Services/Evenements/evenement.service';
import { Evenement } from '../../shared/Models/Evenements/evenement.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EvenementService) { }

  ngOnInit(): void {
    this.getEventsList();
  }


  EvList: Evenement[] = [];
  getEventsList() {
    this.eventService.List().subscribe(res => {
      this.EvList = res
    })

  }
}
