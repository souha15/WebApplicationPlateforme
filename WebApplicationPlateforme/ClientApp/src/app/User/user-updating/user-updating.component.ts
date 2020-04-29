import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-updating',
  templateUrl: './user-updating.component.html',
  styleUrls: ['./user-updating.component.css']
})
export class UserUpdatingComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
    private UserService: UserServiceService,) { }

  ngOnInit(): void {
    this.getIdUrl();
    this.getUsersDetails();

  }


  //get id in URl
  UserId: string;
 
  getIdUrl() {
    this.routeSub = this.route.params.subscribe(params => {
      this.UserId = params['id']
    });
  }
  user: UserDetail = new UserDetail();
  getUsersDetails() {
    this.UserService.GetUserById(this.UserId).subscribe(res => {
      this.user = res
      
    })
  }


  usersup: UserDetail = new UserDetail();

  updateRecord(form: NgForm) {
    this.usersup = Object.assign(this.usersup, this.user);
    this.UserService.EditUser().subscribe(res => {
      this.resetForm();
  
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
      IdAdministration: null,
      IdDepartement: null,
     

    }
  }
}
