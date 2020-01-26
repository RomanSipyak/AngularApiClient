import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule, ToastrService } from 'ngx-toastr';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './authors/author/author.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { from } from 'rxjs';
import { AuthorService } from './shared/author.service';
import { BookComponent } from './books/book/book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './shared/category.service';
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorComponent,
    AuthorListComponent,
    BookComponent,
    BookListComponent,
    CategoryComponent,
    CategoriesListComponent,
    BooksComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: 
  [
    AuthorService,
    CategoryService,
    {provide: ToastrService, useClass: ToastrService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
