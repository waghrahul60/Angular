import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}
  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';
    console.log(data);
    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);
  }
}
