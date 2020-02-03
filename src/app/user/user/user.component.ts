import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../../user/user/user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.userService.refreshListOfRoles();
    this.userService.formData = {
      Email: '',
      userRoles: this.userService.listOfRoles
    }
  }

  onSubmit(form: NgForm) {
    this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.userService.updateUser().subscribe(
      (res: any) => {
        this.resetForm(form);
        this.toastr.success('User updated!', 'Update successful.');
        this.userService.refreshList();
      },
      err => {
        this.toastr.error(err.message);
      }
    );
  }
}
