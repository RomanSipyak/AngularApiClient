import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { UserComponent } from './user/user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { BooksDashboardComponent } from './books/books-dashboard.component';
import { UserListComponent } from './user/users-list/user-list.component';
import { UserLRComponent } from './user/userLR/userLR.component';
import { UsersComponent } from './user/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'user', component: UserLRComponent,
    children: [
      {
        path: 'registration', component: RegistrationComponent
      },
      {
        path: 'login', component: LoginComponent
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
  },
  {
    path: 'dashboard', component: BooksDashboardComponent
  },
  {
    path: 'allUsers', component: UsersComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


