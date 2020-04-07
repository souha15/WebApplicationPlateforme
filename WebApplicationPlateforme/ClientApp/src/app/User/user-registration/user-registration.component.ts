import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../shared/Services/User/user-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private UserService: UserServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
   
    this.UserService.formModel.reset();
  }
  onSubmit() {
    this.UserService.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.UserService.formModel.reset();
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
}
