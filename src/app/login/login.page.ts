import { Component , OnInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username!: string;
  password!: string;

  constructor(private router: Router) {}

  login() {
   
      this.router.navigate(['/home']);
    
  }
}
