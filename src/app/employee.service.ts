// employee.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees`);
  }

  createEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/employees`, employeeData);
  }

  getEmployeeById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }
  updateEmployee(employeeId: number, updatedEmployeeData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/employees/${employeeId}`, updatedEmployeeData);
  }

  
  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employees/${employeeId}`);
  }
}
