import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';
import { User } from 'src/app/shared/user/user.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {
  @Input() user: User;
  constructor(private service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }


  populateForm(user: User) {
    var copyUser = Object.assign({}, user);
    copyUser.userRoles = [];
    this.service.formData = copyUser;
  }


  onDelete(email) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteUserByEmail(email)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'User deleted');
        },
          err => {
            debugger;
            console.log(err);
          });
    }
  }
}
