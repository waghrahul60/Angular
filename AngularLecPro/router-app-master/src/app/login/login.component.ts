import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginProcess() {
    // after suuccessful ajax call
    sessionStorage.setItem('sid', 'true');
    this.router.navigate(['home']);
  }
}
