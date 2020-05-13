import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private UserService: UserServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ShowUsersList();
    this.resetForm();

  }


  //Users List

  private _Users: Observable<UserDetail[]>;
  public get allUser(): Observable<UserDetail[]> {
    return this._Users;
  }

  public set allUser(value: Observable<UserDetail[]>) {
    this._Users = value;


  }

  ShowUsersList() {
   
    this.allUser = this.UserService.GetUsersList();

  }
  
//DeleteUser
  deleteUser(Id: string) {
    if (confirm('هل أنت متأكد من حذف هذا السجل؟')) {
      this.UserService.DeleteUser(Id).subscribe(res => {
        this.ShowUsersList();
          this.toastr.success("تم الحذف  بنجاح", "نجاح");
        },

          err => {
            console.log(err);
            this.toastr.warning('لم يتم الحذف  ', ' فشل');
          }
        )

    }
 
  }

  populateForm(userdetail: UserDetail) {
    // this.tr = Object.assign({}, pd);
    this.UserService.formData = Object.assign({}, userdetail)
    console.log(userdetail)
  }

  usersup: UserDetail = new UserDetail();

  updateRecord(form: NgForm) {
    this.usersup = Object.assign(this.usersup, form.value);
    this.UserService.EditUser().subscribe(res => {
      this.resetForm();
      console.log(res)
    })
  }

  onsubmit(form: NgForm) {
    this.updateRecord(form);

  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.UserService.formData = {
      id: '',
      userName: '',
      email: '',
      Password: '',
      RegistreCivil: '',
      FullNameEnglish: '',
      fullName: '',
      adresse: '',
      PhoneNumber: '',
      Tel: '',
      Statut: '',
      Nationalite: '',
      Religion: '',
      Sexe: '',
      DateNaissance: '',
      LieuNaissance: '',
      Passeport: '',
      TypeSang: '',
      Num: '',
      Emploi: '',
      Rang: '',
      TypeEmploi: '',
      NomAdministration: '',
      NomDepartement: '',
      Unite: '',
      Qualification: '',
      TypeQualification: '',
      FaculteEcole: '',
      DateQualification: '',
      Specialite: '',
      Paysetude: '',
      Mention: '',
      Classement: '',
      Degre: '',
      Salaire: '',
      Indemnite: '',
      AutreIndemnite: '',
      HeureArrive: '',
      HeureDepart: '',
      Photo: '',
      idAdministration: null,
      IdDepartement: null,
  

    }
  }
}
