import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedetailsService } from '../services/sharedetails.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public uiInvalidCredential = false;
  public isValidEmail = false;
  public isValidUsername = false;

  public fbFormGroup = this.fb.group(
    {
      firstName: [
        '',
        Validators.required,
        Validators.min(3),
        Validators.max(20),
      ],
      lastName: [
        '',
        Validators.required,
        Validators.min(3),
        Validators.max(20),
      ],
      userName: [
        '',
        Validators.required,
        Validators.min(3),
        Validators.max(10),
      ],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    },
    { updateOn: 'blur' }
  );

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private sharedData: SharedetailsService
  ) {}

  ngOnInit(): void {}
  async checkEmail() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/checkemail';
    const myres = await this.http.post(url, data).toPromise();
    console.log(myres);
    if (myres != 0) {
      this.isValidEmail = true;
    } else {
      this.isValidEmail = false;
    }
  }
  async checkUsername() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/checkusername';
    const myres = await this.http.post(url, data).toPromise();
    console.log('ljkjhgjlkwrh' + myres);
    if (myres != 0) {
      this.isValidUsername = true;
    } else {
      this.isValidUsername = false;
    }
  }

  async registerHere() {
    const data = this.fbFormGroup.value;
    this.sharedData.sendData('data');
    const url = 'http://localhost:3000/adduser';
    console.log(data);
    await this.http.post(url, data).toPromise();
    this.router.navigate(['userdetails']);
    sessionStorage.setItem('email', data.email);
  }
}
