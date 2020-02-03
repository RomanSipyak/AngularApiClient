import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/shared/author/author.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private service: AuthorService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      FullName: '',
      Biography: '',
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postAuthor().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted succesfully', 'Author Added');
      },
      err => {
        this.toastr.error(err.message);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putAuthor().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Author Updated');
        this.service.refreshList();
      },
      err => {
        this.toastr.error(err.message);
      }
    )
  }
}
