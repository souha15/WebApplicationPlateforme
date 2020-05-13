import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { Observable } from 'rxjs';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks-list-delayed',
  templateUrl: './tasks-list-delayed.component.html',
  styleUrls: ['./tasks-list-delayed.component.css']
})
export class TasksListDelayedComponent implements OnInit {

  constructor(private TacheService: TacheService,
    private UserService: UserServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.getUserConnected();
    this.resetForm();
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
        this.filtredtachelist = this.tacheliste.filter(item => item.affectedName == this.UserIdConnected && item.etat == "غير منجزة")

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

  // Difference with 2 dates
  calculateDiff(dateSent) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
  }


  //edit etat
  etat: string;
  details: Tache = new Tache();
  populateForm(edittache: Tache) {
    this.TacheService.formData = Object.assign({}, edittache)
    this.etat = edittache.etat
    this.details = Object.assign({}, edittache);

  }

  edittache: Tache = new Tache();
  updateRecord(form: NgForm) {
    this.edittache = Object.assign(this.edittache, form.value);

    this.TacheService.EditTache().subscribe(res => {
      this.toastr.success('تم التحديث بنجاح', 'نجاح')
      this.resetForm();
      this.filtredDataTache();
    },
      err => {
        this.toastr.error('لم يتم التحديث  ', ' فشل');
      }


    )
  }

  onSubmit(form: NgForm) {
    this.updateRecord(form)
  }

  //Reset Form

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.TacheService.formData = {
      id: null,
      date: '',
      priorite: '',
      tacheNom: '',
      description: '',
      delai: '',
      atous: '',
      createur: '',
      etat: '',
      type: '',
      sousProjet: '',
      Attribut1: '',
      Attribut2: '',
      Attribut3: '',
      attribut4: null,
      creatorName: '',
      idUserCreator: '',
      affectedName: '',

    }
  }
}
