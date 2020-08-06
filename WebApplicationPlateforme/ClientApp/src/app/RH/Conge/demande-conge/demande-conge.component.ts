import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../../shared/Services/Rh/conge.service';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from '../../../shared/Models/User/user-detail.model';
import { NgForm } from '@angular/forms';
import { Conge } from '../../../shared/Models/RH/conge.model';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {

  constructor(private congeService: CongeService,
    private UserService: UserServiceService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getUserConnected();
    this.UserList();
    this.resetForm();
  }


  // Get User Connected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;
  soldeconge: string;
  userc: UserDetail = new UserDetail();

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.userc=res
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
      this.soldeconge = res.soldeconge;
      this.conge.directeurnom = res.directeur;
      this.conge.directeurid = res.attribut1;
      this.conge.userNameCreator = res.fullName;
      this.conge.idUserCreator = res.id;
   
    })

  }


  //Get Users List
  user: UserDetail[] = [];
  UserList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.user = res;
    })
  }


  //get Remplaçant Name

  getRemplacant(event) {
    this.UserService.GetUserById(event.target.value).subscribe(res => {
      this.conge.nomremplacant = res.fullName
  
    })
  }

  //date fin
  datef;
  tdatefin(event) {
    this.datef = event.target.value;
  }

  //date debut
  dated;
  tdatedebut(event) {
    this.dated = event.target.value;
  }

  //Difference
  diffDays;
  diff() {
    let newDated = new Date(this.dated)
    let newDatef = new Date(this.datef);
    var diff = Math.abs(newDated.getTime() - newDatef.getTime());
    this.diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  }

  //Conge Submit
  conge: Conge = new Conge();
  isValidFormSubmitted = false;
  date = new Date().toLocaleDateString();
  onSubmit(form: NgForm) {
    this.conge.dateenreg = this.date;
    this.conge.etat = "في الانتظار";
    this.conge.etatd = "في الانتظار";
    this.conge.etatrh = "في الانتظار";

    if (form.invalid) {
      this.isValidFormSubmitted = false;

    }
    else {

      this.isValidFormSubmitted = true

      this.diff();
      if (+this.diffDays < +this.soldeconge) {

        this.congeService.Add(this.conge).subscribe(
          res => {
            this.toastr.success("تمت الإضافة بنجاح", "نجاح");
            form.resetForm();
    
          },
          err => {
            this.toastr.error("لم يتم التسجيل","فشل في التسجيل")
          })
      } else {
        
        this.toastr.warning("رصيد إجازتك أقل من المطلوب","")
      }


    }


  
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.UserService.formData = {
      id: '',
      userName: '',
      email: '',
      Password: '',
      registreCivil: '',
      FullNameEnglish: '',
      fullName: '',
      adresse: '',
      PhoneNumber: '',
      tel: '',
      statut: '',
      nationalite: '',
      religion: '',
      sexe: '',
      dateNaissance: '',
      lieuNaissance: '',
      passeport: '',
      typeSang: '',
      num: '',
      emploi: '',
      rang: '',
      typeEmploi: '',
      nomAdministration: '',
      nomDepartement: '',
      unite: '',
      qualification: '',
      typeQualification: '',
      faculteEcole: '',
      dateQualification: '',
      specialite: '',
      paysetude: '',
      mention: '',
      classement: '',
      degre: '',
      salaire: '',
      indemnite: '',
      autreIndemnite: '',
      heureArrive: '',
      heureDepart: '',
      photo: '',
      idAdministration: null,
      idDepartement: null,
      directeur: '',
      position: '',
      attribut1: '',
      attribut6: '',
      attribut5: '',
      attribut4: '',
      attribut3: '',
      attribut2: '',
      soldeconge: '',
      daterectrutement: '',
      etatuser: '',
      dateenreg: '',
      userNameCreator: '',
      idUserCreator: '',


    }
  }

}
