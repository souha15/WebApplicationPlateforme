import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { PrivilegesService } from '../../shared/Services/User/privileges.service';
import { UserDetail } from '../../shared/Models/User/user-detail.model';
import { PrivilegesDetail } from '../../shared/Models/User/privileges-detail.model';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private UserService: UserServiceService,
    private toastr: ToastrService,
    private privilegesService: PrivilegesService
  ) { }

  ngOnInit(): void {
   
    this.UserService.formModel.reset();
  }

  username: string;
  onSubmit() {
    this.UserService.register().subscribe(
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
    this.privilege.userId = this.userId
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
