import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/shared/category/category.service';
import { BookService } from 'src/app/shared/book/book.service';
import { AuthorService } from 'src/app/shared/author/author.service';
import { LanguageService } from 'src/app/shared/language/language.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent implements OnInit {

  constructor(private router: Router,
    private service: BookService,
    private categoryService: CategoryService,
    private authorService: AuthorService,
    private languageService: LanguageService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.languageService.refreshList();
    this.categoryService.refreshList();
    this.authorService.refreshList();
    this.service.formData = {
      Id: 0,
      Title: '',
      Description: '',
      Language: null,
      BookAuthors: this.authorService.list,
      BookCategories: this.categoryService.list
    }
  }

  onSubmit(form: NgForm) {
    // if(this.service.list.find(x => x.Title == this.service.formData.Title))
    // {
    //   this.toastr.error('Category with same title already exist ', 'Change title');
    // }
    // else
    // {
    if (this.service.formData.Id == 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
    // }
  }

  insertRecord(form: NgForm) {
    this.service.postBook().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('submitted succesfully', 'Category Added');
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putBook().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Book Updated');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}