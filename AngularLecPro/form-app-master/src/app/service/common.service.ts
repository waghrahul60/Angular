import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  projectTitle = 'Working with Common Services';
  pi = 3.14;
  info = { title: 'Project', desc: '' };

  constructor() {}
}
