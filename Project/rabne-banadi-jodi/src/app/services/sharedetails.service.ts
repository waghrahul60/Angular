import { Injectable } from '@angular/core';

import { sharedetails } from '../service/sharedetails';

@Injectable({
  providedIn: 'root',
})
export class SharedetailsService {
  userData = {};
  constructor() {}

  sendData(input) {
    this.userData = input;
    console.log(this.userData);
  }

  receiveData() {
    return this.userData;
  }
}
