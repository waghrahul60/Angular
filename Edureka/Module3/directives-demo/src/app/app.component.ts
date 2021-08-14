import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-demo';

  flag: boolean =  true;

  username: string = 'Rahul';


  cources: any = [
    {name: 'Angular', category: 'Web dev', price: 250},
    {name: 'AWS Coud', category: 'Cloud Platform', price: 500},
    {name: 'Java', category: 'middelware', price: 1000}
  ]
}
