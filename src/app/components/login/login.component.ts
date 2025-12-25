import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule, Users } from 'lucide-angular';
import { AuthService } from '../../services/auth.service';
import { LoginData } from '../../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  readonly Users = Users;
  
  loginData: LoginData = {
    username: '',
    password: '',
    userType: 'farmer'
  };

  loginError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  selectUserType(type: 'farmer' | 'admin'): void {
    this.loginData.userType = type;
    this.loginError = '';
  }

  onLogin(): void {
    const success = this.authService.login(this.loginData);
    
    if (success) {
      this.loginError = '';
      this.router.navigate(['/home']);
    } else {
      this.loginError = 'Invalid username or password';
    }
  }
}