import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private TacheService: TacheService) { }

  ngOnInit(): void {
    this.ShowListTaches();
  }

  //Tache list
  private _allTaches: Observable<Tache[]>;
  public get allTache(): Observable<Tache[]> {
    return this._allTaches;
  }

  public set allTache(value: Observable<Tache[]>) {
    this._allTaches = value;


  }

  ShowListTaches() {

    this.allTache = this.TacheService.ListTache();
   
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
}
