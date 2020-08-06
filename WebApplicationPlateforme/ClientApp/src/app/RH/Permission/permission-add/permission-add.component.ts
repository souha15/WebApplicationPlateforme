import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { UserDetail } from '../../../shared/Models/User/user-detail.model';
import { Permission } from '../../../shared/Models/RH/permission.model';
import { NgForm } from '@angular/forms';
import { PermissionService } from '../../../shared/Services/Rh/permission.service';

@Component({
  selector: 'app-permission-add',
  templateUrl: './permission-add.component.html',
  styleUrls: ['./permission-add.component.css']
})
export class PermissionAddComponent implements OnInit {

  constructor(private UserService: UserServiceService,
    private toastr: ToastrService,
    private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.getUserConnected();
  }


  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.per.nomdir = res.directeur;
      this.per.iddir = res.attribut1;
      this.per.userNameCreator = res.fullName;
      this.per.idUserCreator = res.id;

    })

  }

  per: Permission = new Permission();
  isValidFormSubmitted = false;
  date = new Date().toLocaleDateString();
  onSubmit(form: NgForm) {
    this.per.dateenreg = this.date;
    this.per.etatdir = "في الانتظار";
    this.per.date = this.date;
    console.log(form.invalid)
    if (form.invalid) {
      this.isValidFormSubmitted = false;
    }
    else {

      this.isValidFormSubmitted = true
      this.permissionService.Add(this.per).subscribe(
        res => {
          this.toastr.success("تمت الإضافة بنجاح", "نجاح");
          form.resetForm();
        },
        err => {
          this.toastr.error("لم يتم التسجيل", "فشل في التسجيل")
        },
      )

    }
  }
}
