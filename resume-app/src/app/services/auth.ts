import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {
    // При запуску перевіряємо, чи є запис у локальному сховищі браузера
    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  // Метод для входу
  login() {
    this.loggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
  }

  // Метод для виходу
  logout() {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  // Перевірка статусу (чи можна пускати користувача)
  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}