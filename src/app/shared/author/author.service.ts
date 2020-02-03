import { Author } from './author.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  formData: Author;
  readonly rootURL = 'https://localhost:44393/api/v1';
  list: Author[];
  constructor(private http: HttpClient) { }

  postAuthor() {
    return this.http.post(this.rootURL + '/Authors', this.formData);
  }

  putAuthor() {
    return this.http.put(this.rootURL + '/Authors/' + this.formData.Id, this.formData);
  }

  deleteAuthor(Id) {
    return this.http.delete(this.rootURL + '/Authors/' + Id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Authors')
      .toPromise()
      .then(res => this.list = res as Author[]);
  }
}
