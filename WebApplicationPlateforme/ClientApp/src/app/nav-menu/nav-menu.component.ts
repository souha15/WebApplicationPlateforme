import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/Services/User/user-service.service';
import { Router } from '@angular/router';
import { PrivilegesService } from '../shared/Services/User/privileges.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  userDetails;
  constructor(private UserService: UserServiceService,
    private router: Router,
    private privilegesService: PrivilegesService
  ) { }


  ngOnInit(): void {
    this.getUserConnected();
    this.UserService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        
      },
      err => {
        console.log(err);
      },
    );
  }


  getUserProfile() {
   return  this.UserService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLogout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login-page');
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
