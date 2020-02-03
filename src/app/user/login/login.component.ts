import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../user/user/user.component.css']
})
export class LoginComponent implements OnInit {
  public loginresponse: any;
  public getUserProfileresponse: any;

  formModel = {
    Email: '',
    Password: ''
  }
  constructor(private service: UserService, private router: Router, private toastr: ToastrService, private appComponent: AppComponent) { }

  ngOnInit() {
    if (localStorage.getItem('token') != 'null') {
      this.router.navigateByUrl('/dashboard');
    }
  }

  onSubmit(form: NgForm) {

    this.service.login(form.value).subscribe(loginresponse => {
      this.loginresponse = loginresponse
      localStorage.setItem('token', this.loginresponse.Token);
      this.appComponent.token = true;
      this.service.getUserProfile().subscribe(response2 => {
        this.getUserProfileresponse = response2;
        UserService.userDetails = this.getUserProfileresponse;
        localStorage.setItem('userDetails', JSON.stringify(UserService.userDetails));
      },
        err => {
          if (err.status == 400)
            this.toastr.error('Incorrect email or password.', 'Authentication failed.');
          else
            console.log(err);
        });
    },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect email or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );



    // (res: any) => {
    //   localStorage.setItem('token', res.Token);
    //   this.appComponent.token = true;
    //   this.router.navigateByUrl('/');
    // },
    // err => {
    //   if (err.status == 400)
    //     this.toastr.error('Incorrect email or password.', 'Authentication failed.');
    //   else
    //     console.log(err);
    // }

    // );
  }


}