

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit {
  employees!: any[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId).subscribe(() => {
          this.reloadEmployeeList();
      console.log('Employee deleted successfully');
    });
  }

  private reloadEmployeeList() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

 

  
}
