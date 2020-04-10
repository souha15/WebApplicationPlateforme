import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { Observable } from 'rxjs';
import { UserServiceService } from '../../shared/Services/User/user-service.service';


@Component({
  selector: 'app-tasks-list-done',
  templateUrl: './tasks-list-done.component.html',
  styleUrls: ['./tasks-list-done.component.css']
})
export class TasksListDoneComponent implements OnInit {

  constructor(private TacheService: TacheService,
    private UserService: UserServiceService, ) { }

  ngOnInit(): void {

    this.getUserConnected();
    //this.listtache();
    this.filtredDataTache();
  }

  //Tache list

  tacheliste: Tache[] = [];


  listtache() {
    this.TacheService.ListTache().subscribe(res => {
      this.tacheliste = res
    })
  }

  filtredtachelist: Tache[] = [];

  filtredDataTache() {
    this.TacheService.ListTache().subscribe(res => {
      this.tacheliste = res

      if (this.tacheliste != null) {
        this.filtredtachelist = this.tacheliste.filter(item => item.affectedName == this.UserIdConnected && item.etat =="منجزة")

      }
    });


  }
  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  //Pagination initialisation
  p: number = 1;

  // Get User Connected

  UserIdConnected: string;

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;

    })
  }
}
