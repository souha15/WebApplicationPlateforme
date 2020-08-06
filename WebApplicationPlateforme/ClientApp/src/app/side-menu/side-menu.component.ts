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
  privtestaddTask: boolean = false;
  privtestfinance: boolean = false;
  privtesttransaction: boolean = false;
  privtestTasks: boolean = false;
  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;

      this.privilegesService.GetById(this.UserIdConnected).subscribe(res => {
        

        if (res.addTask == 1)
          this.privtestaddTask = true;
        if (res.appel == 1)
          this.privtestfinance = true
        if (res.commAd == 1)
          this.privtesttransaction = true
        if (res.settings == 1)
          this.privtestTasks = true
        
      })

     
    
    })
  }


}
