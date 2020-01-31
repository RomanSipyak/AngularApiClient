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

  // populateForm(Id) {
  //   this.service.getBook(Id)
  //     .subscribe(book => this.book = book);
  //   this.service.formData = Object.assign({}, this.book);
  //   // this.service.formData.BookAuthors.forEach(function (value) {
  //   //   this.book.BookAuthors.forEach(function (value2) {
  //   //     if (value2.Id == value.Id) {
  //   //       value.Selected = "selected"
  //   //     }
  //   //   });
  //   // });
  // }

  // onDelete(Id) {
  //   if (confirm('Are you sure to delete this record ?')) {
  //     this.service.deleteBook(Id)
  //       .subscribe(res => {
  //         debugger;
  //         this.service.refreshList();
  //         this.toastr.warning('Deleted successfully', 'Book deleted');
  //       },
  //         err => {
  //           debugger;
  //           console.log(err);
  //         });
  //   }
  // }
}
