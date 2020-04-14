import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../shared/Services/Taches/tache.service';
import { ToastrService } from 'ngx-toastr';
import { Tache } from '../../shared/Models/Taches/tache.model';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private TacheService: TacheService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
    ) { }

  ngOnInit(): void {

    this.getUserConnected();
    this.getUsersList();
  }

  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;

  getUserConnected() {
    
    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
          
    })  
  }

  //Get Users List

  UsersList: UserDetail[] = [];

  getUsersList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.UsersList = res
    })
  }

  // Select Event

  isEmployeeSelected: boolean;
  selectInput(event) {
    let selected = event.target.value;
    if (selected == "employee") {
      this.isEmployeeSelected = true;
    } else {
      this.isEmployeeSelected = false;
    }
  }

  userAffectedName: string;
  selectInput2(event) {
    let Id = event.target.value;
    this.UserService.GetUserById(Id).subscribe(res => {
      this.userAffectedName = res.fullName;

    })
  }
  //Create Tache

  tache: Tache = new Tache();
  CreatedTache: Tache = new Tache();
  tacheId: number;

  onSubmit() {
    this.tache.idUserCreator = this.UserIdConnected;
    this.tache.creatorName = this.UserNameConnected;
    this.tache.etat = "غير منجزة"
    this.tache.createur = this.userAffectedName;
    this.TacheService.CreateTache(this.tache).subscribe(
      (res: any) => {
        this.CreatedTache = res;
        this.tacheId = this.CreatedTache.id;
  
        this.toastr.success("تم تسجيل المهمة بنجاح", " تسجيل المهمة");
      },
      err => {
        this.toastr.error("فشل تسجيل المهمة"," تسجيل المهمة")
      }

    )
  }
}
