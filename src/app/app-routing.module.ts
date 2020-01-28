import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'authors', component: AuthorsComponent
  },
  {
    path: 'books', component: BooksComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


