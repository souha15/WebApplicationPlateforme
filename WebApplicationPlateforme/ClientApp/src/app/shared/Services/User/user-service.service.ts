import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PathSharedService } from '../../path-shared.service';
import { UserDetail } from '../../Models/User/user-detail.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private PathService: PathSharedService) { }

  readonly BaseURI = this.PathService.getPath();
  formData: UserDetail;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  formModel = this.fb.group({
   
    UserName: ['', [Validators.minLength(6),Validators.required]],
    Email: ['', [Validators.email, Validators.required]],
    FullName: ['',  Validators.required],
    PhoneNumber: ['', [Validators.minLength(8), Validators.maxLength(10)]],
    Statut: [''],
    IdDepartement: [''],
    IdAdministration: [''],
    Roles: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  /* Test for Confirming Passwords*/
  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }

  }
/* User Registration */
  Username: string;
  register(roles: string[]) {
    var body = {
      
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password,
      PhoneNumber: this.formModel.value.PhoneNumber,
      Statut: this.formModel.value.Statut,
      IdDepartement: this.formModel.value.IdDepartement,
      IdAdministration: this.formModel.value.IdAdministration,
      Roles: roles,

    };
    this.Username = this.formModel.value.UserName;
    
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  //User Login
  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  //Get User Profile

  getUserProfile() {

    return this.http.get(this.BaseURI + '/UserProfile', {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + localStorage.getItem('token'),

        //"Content-Type": "application/json"
      })

    });
  }

  //Get User Profile Observable

  getUserProfileObservable() {

    return this.http.get<UserDetail>(this.BaseURI + '/UserProfile', {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + localStorage.getItem('token'),

        //"Content-Type": "application/json"
      })

    });
  }

  //Get UserList

  GetUsersList() {
    return this.http.get<UserDetail[]>(this.BaseURI + '/User');
  }

  //Get User By ID

  GetUserById(Id) {
    return this.http.get<UserDetail>(this.BaseURI + '/User/' + Id);
  }

  GetUserByUserName(UserName) {
    return this.http.get<UserDetail>(this.BaseURI + '/GetUserName/' + UserName);
  }

  //Delete Users

  DeleteUser(Id: string) {
    return this.http.delete(this.BaseURI + '/User/' +Id)

  }

  //Update User

  EditUser() {
    return this.http.put<UserDetail>(this.BaseURI + '/User/' + this.formData.id, this.formData, this.headers);
  }

  //Handling Roles

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}

