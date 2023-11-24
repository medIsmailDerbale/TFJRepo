// create-employee.component.ts

import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage{
  employeeData = {
    first_name: '',
    last_name: '',
    email: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router) {}

  createEmployee() {
    this.employeeService.createEmployee(this.employeeData).subscribe((response) => {
      console.log('Employee created successfully', response);
      this.router.navigate(['/employee-details']);
      
    });
  }
}
