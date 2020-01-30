import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'AngularApiClient';
  token = false;

  ngOnInit() {
    if (localStorage.getItem('token') != 'null')
      this.token = true;
  }

  LogOut() {
    localStorage.setItem('token', null);
    this.token = false;
  }
}

