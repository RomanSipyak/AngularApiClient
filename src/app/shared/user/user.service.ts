import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly rootURL = 'https://localhost:44393/api/v1';

  formModel = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(9)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

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

  register() {
    var body = {
      Email: this.formModel.value.Email,  
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.rootURL + '/Identity/Register', body);
  }

  login(formData) {
     return this.http.post(this.rootURL + '/Identity/Login', formData);
  }

  getUserProfile() {
    // return this.http.get(this.BaseURI + '/UserProfile');
  }
}