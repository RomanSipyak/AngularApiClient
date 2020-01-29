import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/registration', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      {
        path: 'registration', component: RegistrationComponent
      }
    ]
  },
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


