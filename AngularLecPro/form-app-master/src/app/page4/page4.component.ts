import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css'],
})
export class Page4Component implements OnInit {
  // constructor() {}
  // constructor(private router: Router) {}
  // constructor(private router: Router, private http: HttpClient) {}
  // constructor(private http: HttpClient, private router: Router) {}

  // Injecton :: Dependency Injection
  /*private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }*/
  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    public cs: CommonService
  ) {}

  ngOnInit(): void {}
}
