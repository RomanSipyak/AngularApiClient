import { UserService } from '../../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../user/user/user.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        this.service.formModel.reset();
        this.toastr.success('New user created!', 'Registration successful.');

      },
      err => {

        err.error.Errors.forEach(element => {
          this.toastr.error(element);
        });

        console.log(err);
      }
    );
  }
}