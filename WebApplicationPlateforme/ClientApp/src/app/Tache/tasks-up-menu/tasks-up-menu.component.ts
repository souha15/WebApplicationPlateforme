import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { PrivilegesService } from '../../shared/Services/User/privileges.service';


@Component({
  selector: 'app-tasks-up-menu',
  templateUrl: './tasks-up-menu.component.html',
  styleUrls: ['./tasks-up-menu.component.css']
})
export class TasksUpMenuComponent implements OnInit {

  constructor(private privilegesService: PrivilegesService,
    private UserService: UserServiceService) { }

  ngOnInit(): void {
    this.getUserConnected();

  }


  // Get User Connected
  UserIdConnected: string;
  UserNameConnected: string;
  privtest: boolean = false;
  privtestR: boolean = false;
  addTask: any;
  rapport: any;
  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;

      this.privilegesService.GetById(this.UserIdConnected).subscribe(res => {
        this.addTask = res.addTask;
        this.rapport = res.rapport
        if (this.addTask == 1) {
          this.privtest = true;
        }


        if (this.rapport == 1) {
          this.privtestR = true;
        }
       
      })
    })

  }


  //Privilege Test

 /* getPriv(id) {
    this.privilegesService.GetById(id).subscribe(res => {
      if (res.addTask == 1) {
        this.privtest = true;

      } else
        this.privtest = false;

    })

    console.log(this.privtest)
  }*/
}
