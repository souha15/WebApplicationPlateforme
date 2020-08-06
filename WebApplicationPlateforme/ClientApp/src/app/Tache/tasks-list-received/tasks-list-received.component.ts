import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { Observable } from 'rxjs';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tasks-list-received',
  templateUrl: './tasks-list-received.component.html',
  styleUrls: ['./tasks-list-received.component.css']
})
export class TasksListReceivedComponent implements OnInit {

  constructor(private TacheService: TacheService,
    private UserService: UserServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
 
    this.getUserConnected();
    //this.listtache();
    this.filtredDataTache();
    this.resetForm();
  }

  //Tache list

  tacheliste: Tache[] = [];
  filtredtachelist: Tache[] = [];

  filtredDataTache() {
    this.TacheService.ListTache().subscribe(res => {
      this.tacheliste = res

   
        this.filtredtachelist = this.tacheliste.filter(item => item.affectedName == this.UserIdConnected || item.atous == 'all')

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

  //edit etat
  etat: string;
  details: Tache = new Tache();
  populateForm(edittache: Tache) {
    this.TacheService.formData = Object.assign({}, edittache)
    this.etat = edittache.etat
    this.details = Object.assign({},edittache);

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
