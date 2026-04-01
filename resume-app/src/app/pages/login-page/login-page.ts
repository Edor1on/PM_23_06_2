import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth'; // Шлях до нашого сервісу

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage { // або LoginPageComponent, як він у тебе називався раніше

  // Підключаємо сервіс авторизації та роутер для переходу
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(); // Записуємо в пам'ять, що ми "увійшли"
    this.router.navigate(['/resume']); // Наказуємо роутеру перекинути нас на резюме
  }
}