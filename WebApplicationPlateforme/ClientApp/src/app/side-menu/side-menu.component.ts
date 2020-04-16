import { Component, OnInit } from '@angular/core';
import { PrivilegesService } from '../shared/Services/User/privileges.service';
import { UserServiceService } from '../shared/Services/User/user-service.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private privilegesService: PrivilegesService,
    private UserService: UserServiceService) { }

  ngOnInit(): void {
    this.getUserConnected();
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
  //Privilege Test
  privtest: boolean = false;
  getPriv(Id:string): boolean {
    this.privilegesService.GetById(Id).subscribe(res => {
      if (res.addTask == 1) {
        this.privtest = true;
      } else
        this.privtest = false;
    })
    return this.privtest
  }
}
