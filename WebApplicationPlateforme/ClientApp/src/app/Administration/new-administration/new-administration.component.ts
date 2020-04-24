import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../../shared/Services/Administration/administration.service';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { Administration } from '../../shared/Models/Administration/administration.model';

@Component({
  selector: 'app-new-administration',
  templateUrl: './new-administration.component.html',
  styleUrls: ['./new-administration.component.css']
})
export class NewAdministrationComponent implements OnInit {

  constructor(private AdministrativeSevice: AdministrationService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
  ) { }

  ngOnInit(): void {
    
    this.getUsersList();
  
  }


  //Get Users List

  UsersList: UserDetail[] = [];

  getUsersList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.UsersList = res
    })
  }

  //Create Tache


  admin: Administration = new Administration();
  CreatedAdministration: Administration = new Administration();
  adminId: number;

  onSubmit() {
    
   
    this.AdministrativeSevice.AddAdministration(this.admin).subscribe(
      (res: any) => {
        this.CreatedAdministration = res;
        this.adminId = this.CreatedAdministration.id;

        this.toastr.success("تم تسجيل الإدارة بنجاح", " تسجيل الإدارة");
      },
      err => {
        this.toastr.error("فشل تسجيل الإدارة", " تسجيل الإدارة")
      }

    )
  }

}
