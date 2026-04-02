import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private apiUrl = 'http://localhost:3000/api/login'; // Шлях до нашого бекенду

  // Підключаємо HttpClient для запитів
  constructor(private http: HttpClient) {
    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  // Тепер метод приймає логін і пароль та повертає Observable
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password }).pipe(
      tap(() => {
        // Якщо сервер відповів успішно (статус 200), записуємо, що ми увійшли
        this.loggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
      })
    );
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}