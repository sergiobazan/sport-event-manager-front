import { Component } from '@angular/core';
import { UserRequest } from '../models/User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerRequest: UserRequest = {
    email: '',
    password: '',
    name: '',
    birthDate: new Date,
    role: 'ATHLETE'
  }

  constructor(private service: AuthService) { }

  onSubmit() {
    this.service.register(this.registerRequest).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: ({error}) => console.error(error)
    })
  }
}
