import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss'],
})
export class MyhomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }
}
