import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse, UserRequest, UserResponse } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}`

  constructor(private http: HttpClient) { }

  register(registerRequest: UserRequest) {
    return this.http.post<UserResponse>(`${this.apiUrl}/register`, registerRequest);
  }

  login(loginRequest: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginRequest);
  }
}
