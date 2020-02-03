import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/shared/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: []
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router, private service: CategoryService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      Title: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.list.find(x => x.Title == this.service.formData.Title)) {
      this.toastr.error('Category with same title already exist ', 'Change title');
    }
    else {
      if (this.service.formData.Id == 0) {
        this.insertRecord(form);
      }
      else {
        this.updateRecord(form);
      }
    }
  }

  insertRecord(form: NgForm) {
    this.service.postCategory().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('submitted succesfully', 'Category Added');
      },
      err => {
        this.toastr.error(err.message);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putCategory().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Category Updated');
        this.service.refreshList();
      },
      err => {
        this.toastr.error(err.message);
      }
    )
  }
  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
