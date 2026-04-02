import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; 
import { AuthService } from './services/auth'; // Шлях до твого сервісу

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(public authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}