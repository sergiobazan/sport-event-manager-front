import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../models/User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginRequest: LoginRequest = {
    email: '',
    password: ''
  }

  constructor(private service: AuthService, private router: Router) {}

  onSubmit() {
    this.service.login(this.loginRequest).subscribe({
      next: (response) => {
        localStorage.setItem("token", response.token);
        this.loginRequest = {
          email: '',
          password: ''
        }
        this.router.navigate([""]);
      },
      error: ({error}) => console.error(error)
    });
  }
}
