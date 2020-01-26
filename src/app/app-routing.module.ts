import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';


const routes: Routes = [
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'authors', component: AuthorsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


