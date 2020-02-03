import { Category } from './category.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  formData: Category;
  readonly rootURL = 'https://localhost:44393/api/v1';
  list: Category[];
  constructor(private http: HttpClient) { }

  postCategory() {
    return this.http.post(this.rootURL + '/Categories', this.formData);
  }

  putCategory() {
    return this.http.put(this.rootURL + '/Categories/' + this.formData.Id, this.formData);
  }

  deleteCategory(Id) {
    return this.http.delete(this.rootURL + '/Categories/' + Id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Categories')
      .toPromise()
      .then(res => this.list = res as Category[]);
  }
}
