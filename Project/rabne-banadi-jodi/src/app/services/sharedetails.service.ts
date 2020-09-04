import { Injectable } from '@angular/core';

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
