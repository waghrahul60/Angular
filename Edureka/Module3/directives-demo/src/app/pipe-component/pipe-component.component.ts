import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent implements OnInit {

  title: string = 'pipes demo';

  salary: number = 100000;

  dob: Date = new Date();
  term: any;

  constructor() { }

  ngOnInit(): void {
  }

  convert(){

  }

  products: any = [
    {name: 'Angular', category: 'Web dev', price: 250},
    {name: 'AWS Coud', category: 'Cloud Platform', price: 500},
    {name: 'Java', category: 'middelware', price: 1000}
  ]

}
