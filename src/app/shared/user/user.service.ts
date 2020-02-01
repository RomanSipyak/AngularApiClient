import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  list: User[];
  public static userDetails = {
    Email: '',
    userRoles: ['']
  };

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
    //  let loginresponse =  this.http.post(this.rootURL + '/Identity/Login', formData);
    //  let getUserProfileresponse = this.getUserProfile();
    //  return forkJoin([loginresponse,getUserProfileresponse])

  }

  getUserProfile() {
    return this.http.get(this.rootURL + '/Identity/UserProfile');
  }

  getUserDetails() {
    if (localStorage.getItem('userDetails') != 'null') {
      UserService.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    }
    return UserService.userDetails;
  }

  deleteUserByEmail(email){
    return this.http.delete(this.rootURL + '/Identity/Users/Delete/' + email);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Identity/Users')
      .toPromise()
      .then(res => this.list = res as User[]);
  }
}