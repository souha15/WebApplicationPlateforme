import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PrivilegesService } from '../../shared/Services/User/privileges.service';
import { AdministrationService } from '../../shared/Services/Administration/administration.service';
import { EtablissementService } from '../../shared/Services/Etablissement/etablissement.service';
import { RoleService } from '../../shared/Services/User/role.service';
import { Etablissement } from '../../shared/Models/Etablissement/etablissement.model';
import { Administration } from '../../shared/Models/Administration/administration.model';
import { PrivilegesDetail } from '../../shared/Models/User/privileges-detail.model';

@Component({
  selector: 'app-user-updating',
  templateUrl: './user-updating.component.html',
  styleUrls: ['./user-updating.component.css']
})
export class UserUpdatingComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
    private UserService: UserServiceService,
    private toastr: ToastrService,
    private privilegesService: PrivilegesService,
    private administrationservice: AdministrationService,
    private etablissementservice: EtablissementService,
    private RolesService: RoleService) { }

  ngOnInit(): void {
    this.getIdUrl();
    this.getUsersDetails();
    this.GetEtablisssementList();
    this.GetAdmninstrativeList();
    this.getRoles();
    this.getUsersList();
    this.resetFormPrivileges();
    this.GetUserPrivileges();
  }

  //Get Users List
  UsersList: UserDetail[] = [];
  getUsersList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.UsersList = res
    })

  }
  // Get Roles List

  roles: any[];

  getRoles() {
    this.RolesService.getAllRoles().subscribe(
      (data: any) => {
        data.forEach(obj => obj.selected = false);
        this.roles = data;


      }

    )


  }

  // Get Etablissement List

  EtablissementList: Etablissement[] = [];

  GetEtablisssementList() {
    this.etablissementservice.ListEtablissement().subscribe(res => {
      this.EtablissementList = res

    })

  }

  //Administration Liste

  AdministrationList: Administration[] = [];

  GetAdmninstrativeList() {
    this.administrationservice.ListAdministration().subscribe(res => {
      this.AdministrationList = res
    })
  }


  //get id in URl
  UserId: string;
 
  getIdUrl() {
    this.routeSub = this.route.params.subscribe(params => {
      this.UserId = params['id']
    });
  }

  //Get User Id
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
      this.toastr.success("تم تحديث المستخدم","تحديث")
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

  resetFormPrivileges(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.privilegesService.formData = {
      id: '',      
      settings: null,
      addTask: null,
      rapport: null,
      commAd: null,
      appel: null,
      serviceEmployee: null,
      salaire: null,
      performance: null,
      userid: '',


    }
  }

  Privileges: PrivilegesDetail = new PrivilegesDetail();
  GetUserPrivileges() {
    this.privilegesService.GetById(this.UserId).subscribe(res => {
      this.Privileges = res
    
    })
  }


  settings: number = 0;

  onSelect1(event) {
    if (event.target.checked) {
      this.settings = 1

    }
    else
      this.settings = 0
  }

  addTask: number = 0;
  onSelect2(event) {
    if (event.target.checked) {
      this.addTask = 1

    }
    else
      this.addTask = 0
  }

  Rapport: number = 0;
  onSelect3(event) {
    if (event.target.checked) {
      this.Rapport = 1

    }
    else
      this.Rapport = 0
  }

  commAd: number = 0;
  onSelect4(event) {
    if (event.target.checked) {
      this.commAd = 1

    }
    else
      this.commAd = 0
  }

  appel: number = 0;
  onSelect5(event) {
    if (event.target.checked) {
      this.appel = 1;

    }
    else
      this.appel = 0
  }

  serviceEmployee: number = 0;
  onSelect6(event) {
    if (event.target.checked) {
      this.serviceEmployee = 1

    }
    else
      this.serviceEmployee = 0
  }

  salaire: number = 0;
  onSelect7(event) {
    if (event.target.checked) {
      this.salaire = 1;

    }
    else
      this.salaire = 0
  }

  performance: number = 0;
  onSelect8(event) {
    if (event.target.checked) {
      this.performance = 1;
    }
    else
      this.performance = 0
  }


  updatePrivileges(form: NgForm) {
    this.Privileges.settings = this.settings;
    this.Privileges.addTask = this.addTask;
    this.Privileges.appel = this.appel;
    this.Privileges.commAd = this.commAd;
    this.Privileges.performance = this.performance;
    this.Privileges.rapport = this.Rapport;
    this.Privileges.salaire = this.salaire;
    this.Privileges.serviceEmployee = this.serviceEmployee;
    this.Privileges.settings = this.settings;
    this.privilegesService.PutPrivilegeObservable(this.Privileges, this.Privileges.id).subscribe(res => {
      this.toastr.success("تم تحديث المستخدم", "تحديث")
      this.resetForm();

    })
  }

  onSubmitPrivileges(form: NgForm) {
    this.updatePrivileges(form)
  }


  //Change Password


  userdetail: UserDetail = new UserDetail();


  onSubmit() {
    this.userdetail.id = this.UserId;

    this.UserService.ChangePassword(this.userdetail).subscribe(res => {
      this.toastr.success('تم إعادة تعيين كلمة المرور الخاصة بك', 'نجاح');
    })
  }
}
