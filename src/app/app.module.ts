import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './authors/author/author.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { from } from 'rxjs';
import { AuthorService } from './shared/author/author.service';
import { BookComponent } from './books/book/book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './shared/category/category.service';
import { BookService } from './shared/book/book.service';
import { LanguageService } from './shared/language/language.service';
import { MbscModule } from '@mobiscroll/angular-lite';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { isPlatformBrowser } from '@angular/common';
import { AuthInterceptor } from './shared/auth.interceptor';
import { UserService } from './shared/user/user.service'

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
    CategoriesComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MbscModule,
    ToastrModule.forRoot()
  ],
  providers:
    [
      AuthorService,
      CategoryService,
      BookService,
      UserService,
      LanguageService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true 
      },
      { provide: ToastrService, useClass: ToastrService }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }