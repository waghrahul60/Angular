import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedetailsService } from '../services/sharedetails.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private sharedData: SharedetailsService
  ) {}

  public fbFormGroup = this.fb.group({
    religion: ['', Validators.required],
    mothertoung: ['', Validators.required],
    dob: ['', Validators.required],
    cast: ['', Validators.required],
    subcast: ['', Validators.required],
    maritalstatus: ['', Validators.required],
    hight: ['', Validators.required],
    familymembers: ['', Validators.required],
  });
  userData = {};

  async adduserdetails() {
    const data = this.fbFormGroup.value;
    this.sharedData.sendData('data');
    const url = 'http://localhost:3000/adduserdetails';
    console.log(data);
    await this.http.post(url, data).toPromise();
    this.router.navigate(['login']);
    sessionStorage.setItem('email', data.email);
  }

  ngOnInit(): void {}
}
