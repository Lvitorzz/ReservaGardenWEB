import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'autenticado';
  private isAuthenticated: boolean = localStorage.getItem(this.storageKey) === 'true';

  constructor() { }

  login(): void {
    this.isAuthenticated = true;
    localStorage.setItem(this.storageKey, 'true');
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.setItem(this.storageKey, 'false');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}