import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginData } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<string | null>(null);
  
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  currentUser$ = this.currentUserSubject.asObservable();

  private validCredentials = {
    farmer: { username: 'farmer', password: 'farmer123' },
    admin: { username: 'admin', password: 'admin123' }
  };

  login(loginData: LoginData): boolean {
    const credentials = this.validCredentials[loginData.userType];
    
    if (loginData.username === credentials.username && 
        loginData.password === credentials.password) {
      this.isLoggedInSubject.next(true);
      this.currentUserSubject.next(loginData.username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.isLoggedInSubject.value;
  }
}