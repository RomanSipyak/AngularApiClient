import { Language } from './language.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  formData: Language;
  readonly rootURL = 'https://localhost:44393/api/v1';
  list: Language[];
  constructor(private http: HttpClient) { }

  postLanguage() {
    return this.http.post(this.rootURL + '/Languages', this.formData);
  }

  putLanguage() {
    return this.http.put(this.rootURL + '/Languages/' + this.formData.Id, this.formData);
  }

  deleteLanguage(Id) {
    return this.http.delete(this.rootURL + '/Languages/' + Id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Languages')
      .toPromise()
      .then(res => this.list = res as Language[]);
  }
}
