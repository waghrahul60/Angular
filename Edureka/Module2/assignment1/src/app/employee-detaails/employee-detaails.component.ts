import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-employee-detaails',
  templateUrl: './employee-detaails.component.html',
  styleUrls: ['./employee-detaails.component.css']
})
export class EmployeeDetaailsComponent implements OnInit {

  constructor() { }
  Email:any;
  City:any;

  ngOnInit(): void {
  }

  @Output()
  public updateEmail = new EventEmitter();

  @Input()
  employee:any;

  Update(){
    this.updateEmail.emit(this.Email);
    this.updateEmail.emit(this.City);
  }



}
