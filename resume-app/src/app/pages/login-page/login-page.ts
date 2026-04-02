import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth'; 

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  username = '';
  password = '';
  loginError = false; 

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Відправляємо дані на наш Node.js сервер
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Якщо бекенд сказав "ОК", ховаємо помилку і йдемо на резюме
        this.loginError = false;
        this.router.navigate(['/resume']);
      },
      error: (err) => {
        // Якщо бекенд повернув помилку 401 (Не знайдено в базі), показуємо червоний текст
        this.loginError = true;
        console.error('Помилка авторизації:', err);
      }
    });
  }
}