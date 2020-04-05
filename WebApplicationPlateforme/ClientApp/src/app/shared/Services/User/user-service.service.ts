import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  readonly BaseURI = 'http://localhost:44384/api';
  constructor(private fb: FormBuilder,
    private http: HttpClient) { }

  formModel = this.fb.group({
    UserName: ['', [Validators.minLength(6),Validators.required]],
    Email: ['', [Validators.email, Validators.required]],
    FullName: ['',  Validators.required],
    PhoneNumber: ['', [Validators.minLength(8), Validators.maxLength(10)]],
    Statut: [''],
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
  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password,
      PhoneNumber: this.formModel.value.PhoneNumber,
      Statut: this.formModel.value.Statut
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }
}
