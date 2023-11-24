import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  logout() {
    // Implement your logout logic here
    this.router.navigate(['/login']);
  }

  goToCreateEmployee() {
    this.router.navigate(['/create-employee']);
  }

  goToEmployeeDetails() {
    this.router.navigate(['/employee-details']);
  }
}
