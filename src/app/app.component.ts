import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  route: string;
  isLoginPage: boolean;
  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      // this.route = location.path();
      this.isLoginPage = location.path() == '/login' ? true : false
    });
  }
}
