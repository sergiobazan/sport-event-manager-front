import { Component } from '@angular/core';
import { LoginRequest } from '../models/User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginRequest: LoginRequest = {
    email: '',
    password: ''
  }

  constructor(private service: AuthService) {}

  onSubmit() {
    this.service.login(this.loginRequest).subscribe({
      next: (response) => {
        console.log(response);
        this.loginRequest = {
          email: '',
          password: ''
        }
      },
      error: ({error}) => console.error(error)
    });
  }
}
