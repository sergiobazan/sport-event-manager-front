export interface User {
  id: string
  name: string
  email: string
  role: string
  birthDate: Date
  password: string
}

export type UserRequest = Omit<User, 'id'>;

export type UserResponse = Omit<User, 'password'>;

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
}