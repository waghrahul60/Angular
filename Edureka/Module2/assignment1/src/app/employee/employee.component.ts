import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  currentEmployee:any;

  ngOnInit(): void {
  }

  employe: any = [
    { EmployeeId:'1',FirstName:'Rahul',LastName:'wagh',Dept:'IT',City:'Mumbai',Email:'waghrahul@gmail.com' },
    { EmployeeId:'2',FirstName:'Kalpesh',LastName:'Patil',Dept:'IT',City:'gfh',Email:'waghrahul@gmail.com' },
    { EmployeeId:'3',FirstName:'Sudershan',LastName:'Pawar',Dept:'IT',City:'Mumbai',Email:'waghrahul@gmail.com' },
    { EmployeeId:'4',FirstName:'Saheb',LastName:'Patil',Dept:'IT',City:'Pune',Email:'waghrahul@gmail.com' },
    { EmployeeId:'5',FirstName:'Vaibhav',LastName:'Pise',Dept:'IT',City:'Mumbai',Email:'waghrahul@gmail.com' }
  ];

  ViewEmp(emp: any){
    this.currentEmployee = emp;
  }

  onUpdateEmail(updateEmail:any){ 
    this.currentEmployee.Email = updateEmail.Email;
    this.currentEmployee.City = updateEmail.City;
}
}
