import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  // lets protect thsi page :: sessin validate this page; sessionStorage
  ngOnInit(): void {
    // no session id
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

  logoutProcess() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }
}
