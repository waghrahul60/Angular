import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'white-app';

  constructor(private router: Router) {}

  // break;
  gotoPage(page) {
    // this.router.navigate(['4']);
    this.router.navigate([page]);
  }
}
