import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent} from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../user.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    Email: '',
    Password: ''
  }
  constructor(private service: UserService, private router: Router, private toastr: ToastrService, private appComponent : AppComponent) { }

  ngOnInit() {
    if (localStorage.getItem('token') != 'null')
    {
      this.router.navigateByUrl('/authors');
    }
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.Token);
        this.appComponent.token = true;
        this.router.navigateByUrl('/');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect email or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}