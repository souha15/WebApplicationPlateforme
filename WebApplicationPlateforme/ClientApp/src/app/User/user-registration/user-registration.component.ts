import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { PrivilegesService } from '../../shared/Services/User/privileges.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { PrivilegesDetail } from '../../shared/Models/User/privileges-detail.model';
import { AdministrationService } from '../../shared/Services/Administration/administration.service';
import { EtablissementService } from '../../shared/Services/Etablissement/etablissement.service';
import { Etablissement } from '../../shared/Models/Etablissement/etablissement.model';
import { Administration } from '../../shared/Models/Administration/administration.model';
import { RoleService } from '../../shared/Services/User/role.service';
import { Role } from '../../shared/Models/User/role.model';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private UserService: UserServiceService,
    private toastr: ToastrService,
    private privilegesService: PrivilegesService,
    private administrationservice: AdministrationService,
    private etablissementservice: EtablissementService,
    private RolesService: RoleService
  ) { }

  ngOnInit(): void {
   
    this.UserService.formModel.reset();
    this.GetEtablisssementList();
    this.GetAdmninstrativeList();
    this.getRoles();
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

  updateSelectedRoles(index) {
    this.roles[index].selected = !this.roles[index].selected;
    var x = this.roles.filter(x => x.selected).map(y => y.Name);
    console.log(x)
  }

  // Get Etablissement List

  EtablissementList: Etablissement[] = [];

  GetEtablisssementList() {
    this.etablissementservice.ListEtablissement().subscribe(res => {
      this.EtablissementList = res

    })

  }

  // convert id Etablissement
  ConvertedEtabId: number;
  selectInput1(event) {
    let selected = event.target.value;
    if (selected) {
      console.log(typeof parseInt(selected))
      return parseInt(selected)

    } else {
      return parseInt(selected)
    }
  }

  // convert idAdmnistration
  ConvertedId: number;
  selectInput2(event) {
    let selected = event.target.value;
    if (selected) {
      return parseInt(selected)
    } else {
      return parseInt(selected)
    }
  }

  //Administration Liste

  AdministrationList: Administration[] = [];

  GetAdmninstrativeList() {
    this.administrationservice.ListAdministration().subscribe(res => {
      this.AdministrationList=res
    })
  }
  x:any
  selectInput4(event) {
    this.x = event.target.value;
    console.log(this.x)
  }
  //Register User
  username: string;
  onSubmit() {

    var x = this.roles.filter(x => x.selected).map(y => y.name);
   // var x = this.roles.filter(x => x.selected).map(y=>y.name)
        console.log(x)
        this.UserService.register(x).subscribe(
          (res: any) => {
            if (res.succeeded) {
              this.UserService.formModel.reset();
              this.username = this.UserService.Username;
              this.GetUserByUserName(this.username)
              this.toastr.success('تم إنشاء المستخدم', 'تم التسجيل بنجاح');
            } else {
              res.errors.forEach(element => {
                switch (element.code) {
                  case 'DuplicateUserName':
                    this.toastr.error('اسم المستخدم مسجل من قبل', 'فشل في التسجيل');
                    break;

                  default:
                    this.toastr.error(element.description, 'فشل في التسجيل');
                    break;
                }
              });
            }
          },
          err => {
            console.log(err);
          }
        );
  
  }

  // Get User By UserName
  user: UserDetail = new UserDetail();
  userId: string;
  GetUserByUserName(Username:string) {
    if (this.username != '') {
      this.UserService.GetUserByUserName(Username).subscribe(res => {
        this.user = res
        //this.privilege.userId = this.user.id;
        this.userId = this.user.id
    })
      }
  }


  //Submit Privileges
  privilege: PrivilegesDetail = new PrivilegesDetail();
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
      this.Rapport=1

    }
    else
      this.Rapport =0
  }

  commAd: number = 0;
  onSelect4(event) {
    if (event.target.checked) {
      this.commAd=1

    }
    else
      this.commAd=0
  }

  appel: number = 0;
  onSelect5(event) {
    if (event.target.checked) {
      this.appel = 1;

    }
    else
      this.appel=0
  }

  serviceEmployee: number = 0;
  onSelect6(event) {
    if (event.target.checked) {
      this.serviceEmployee = 1

    }
    else
      this.serviceEmployee=0
  }

  salaire: number = 0;
  onSelect7(event) {
    if (event.target.checked) {
      this.salaire = 1;

    }
    else
      this.salaire=0
  }

  performance: number = 0;
  onSelect8(event) {
    if (event.target.checked) {
      this.performance = 1;
    }
    else
      this.performance=0
  }

  onSubmitPrivileges() {
    this.privilege.addTask = this.addTask;
    this.privilege.appel = this.appel;
    this.privilege.commAd = this.commAd;
    this.privilege.performance = this.performance;
    this.privilege.Rapport = this.Rapport;
    this.privilege.salaire = this.salaire;
    this.privilege.serviceEmployee = this.serviceEmployee;
    this.privilege.settings = this.settings;
    this.privilege.userid = this.userId
    this.privilege.id = this.userId
    this.privilegesService.CreatePrivilege(this.privilege).subscribe(
      (res: any) => {
        this.toastr.success('تمت إضافة الامتيازات بنجاح', 'إضافة الامتيازات');
      },
      err => {
        this.toastr.error(err, 'فشل في إضافة الامتيازات');
      }

    )

  }
}
