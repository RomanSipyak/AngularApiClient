import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {

  constructor(public service: UserService) {

  }

  title = 'AngularApiClient';
  token = false;

  ngOnInit() {
    if (localStorage.getItem('token') != 'null')
      this.token = true;
  }

  LogOut() {
    localStorage.setItem('token', null);
    localStorage.setItem('userDetails', JSON.stringify({ Email: '', userRoles: [''] }));
    UserService.userDetails = { Email: '', userRoles: [''] };
    this.token = false;
  }
}

