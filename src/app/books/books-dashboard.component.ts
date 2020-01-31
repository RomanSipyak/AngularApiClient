import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/shared/book/book.service';
import { Book } from 'src/app/shared/book/book.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-books-dashboard',
  templateUrl: './books-dashboard.component.html',
  styles: []
})
export class BooksDashboardComponent implements OnInit {
  @Input() book: Book;
  constructor(private service: BookService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  } 
}
