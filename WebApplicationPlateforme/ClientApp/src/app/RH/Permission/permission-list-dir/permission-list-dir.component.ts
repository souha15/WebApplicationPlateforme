import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../../shared/Services/Rh/conge.service';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { UserDetail } from '../../../shared/Models/User/user-detail.model';
import { NgForm } from '@angular/forms';
import { Permission } from '../../../shared/Models/RH/permission.model';
import { PermissionService } from '../../../shared/Services/Rh/permission.service';
@Component({
  selector: 'app-permission-list-dir',
  templateUrl: './permission-list-dir.component.html',
  styleUrls: ['./permission-list-dir.component.css']
})
export class PermissionListDirComponent implements OnInit {

  filter;
  constructor(private congeService: PermissionService,
    private toastr: ToastrService,
    private UserService: UserServiceService, ) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.CongeList();
    this.resetForm();
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

  congeList: Permission[] = [];
  filtredCongeList: Permission[] = [];
  CongeList() {
    this.congeService.Get().subscribe(res => {
      this.congeList = res
      this.filtredCongeList = this.congeList.filter(item => item.iddir == this.UserIdConnected)
    })
  }
  per: Permission = new Permission();

  populateForm(conge: Permission) {
    this.per = Object.assign({}, conge)
    this.congeService.formData = Object.assign({}, conge)
  }

  date = new Date().toLocaleDateString();
  conge: Permission = new Permission();

  updateRecord(form: NgForm) {

    this.conge = Object.assign(this.conge, form.value);
    this.congeService.formData.datedir = this.date;
      this.congeService.Edit().subscribe(res => {
        this.toastr.success('تم التحديث بنجاح', 'نجاح')
        this.resetForm();
        this.CongeList();
      },
        err => {
          this.toastr.error('لم يتم التحديث  ', ' فشل');
        }


      )
    
  }

  onSubmit(form: NgForm) {

    this.updateRecord(form)
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
