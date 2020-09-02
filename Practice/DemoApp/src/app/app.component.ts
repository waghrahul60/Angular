import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'yellow-app';
  // linksList = ['Projects', 'Education', 'Achievement', 'Contact Me'];
  linksList = [
    { title: 'Projects', link: 'project' },
    { title: 'Education', link: 'education' },
    { title: 'Achievement', link: 'achievement' },
    { title: 'Contact me', link: 'contact-me' },
  ];

  constructor(private router: Router) {}

  gotoRoute(page) {
    this.router.navigate([page]);
  }
}
