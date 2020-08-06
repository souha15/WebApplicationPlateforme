import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../../shared/Services/Rh/conge.service';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { UserDetail } from '../../../shared/Models/User/user-detail.model';
import { NgForm } from '@angular/forms';
import { Permission } from '../../../shared/Models/RH/permission.model';
import { PermissionService } from '../../../shared/Services/Rh/permission.service';
@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent implements OnInit {
  filter;
  constructor(private congeService: PermissionService,
    private toastr: ToastrService,
    private UserService: UserServiceService,) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.CongeList();
    this.resetForm();
  }

  //Get Users List
  user: UserDetail[] = [];
  UserList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.user = res;
    })
  }

  //Get UserConnected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;
  userc: UserDetail = new UserDetail();

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.userc = res
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
    })

  }

  //Get Conge Demand Lis

  congeList: Permission[] = [];
  filtredCongeList: Permission[] = [];
  CongeList() {
    this.congeService.Get().subscribe(res => {
      this.congeList = res
      this.filtredCongeList = this.congeList.filter(item => item.idUserCreator == this.UserIdConnected)
    })
  }

  //Edit Administration
  congeId: number;
  onSubmit(form: NgForm) {
 
    this.updateRecord(form)
  }

  conge: Permission = new Permission();
  updateRecord(form: NgForm) {

    this.conge = Object.assign(this.conge, form.value);
    this.congeId = this.conge.id;
    
    if (this.conge.etatdir == "في الانتظار") {
      this.congeService.Edit().subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح')
        this.resetForm();
        this.CongeList();
      },
        err => {
          this.toastr.error('لم يتم التحديث  ', ' فشل');
        }


      )
    } if (this.conge.etatdir == 'موافق') {
      this.toastr.error('لقد تمت الموافقة على طلب الإجازة', ' لم يتم التحديث');
    } if (this.conge.etatdir == 'رفض') {
      this.toastr.error('لقد تم رفض طلب الإجازة', ' لم يتم التحديث');
    }
  }


  populateForm(conge: Permission) {
    this.congeService.formData = Object.assign({}, conge)
    this.congeId = conge.id

  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.congeService.formData = {
      id: null,
      nbheure: '',
      etatdir: '',
      date: '',
      datedir: '',
      iddir: '',
      attribut1: null,
      nomdir: '',
      attribut2: '',
      attribut3: '',
      attribut4: '',
      attribut5: '',
      attribut6: '',
      dateenreg: '',
      userNameCreator: '',
      idUserCreator: '',

    }
  }
}
