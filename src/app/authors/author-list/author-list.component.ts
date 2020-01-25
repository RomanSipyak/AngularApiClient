import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/shared/author.service';
import { Author } from 'src/app/shared/author.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  constructor(private service: AuthorService,private toastr: ToastrService) { }

  ngOnInit() {
     this.service.refreshList();
  }

  populateForm(author: Author){
    this.service.formData = Object.assign({},author);
  }

  onDelete(Id)
  {
      if (confirm('Are you sure to delete this record ?')) {
        this.service.deleteAuthor(Id)
          .subscribe(res => {
            debugger;
            this.service.refreshList();
            this.toastr.warning('Deleted successfully', 'Payment Detail Register');
          },
            err => {
              debugger;
              console.log(err);
            });
      }
  }
}
