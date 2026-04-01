import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard'; // Якщо файл згенерувався як auth.ts, зміни тут на './guards/auth'

export const routes: Routes = [
  // 1. Коли хтось заходить просто на localhost:4200, кидаємо його на резюме
  { path: '', redirectTo: 'resume', pathMatch: 'full' },

  // 2. Маршрут для Резюме з Lazy Loading
  { 
    path: 'resume', 
    loadComponent: () => import('./pages/resume-page/resume-page').then(m => m.ResumePageComponent),
    canActivate: [authGuard] // <--- ОСЬ НАШ ЗАМОК
  },

  // 3. Маршрут для сторінки Логіну з Lazy Loading
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login-page/login-page').then(m => m.LoginPage)
  },

  // 4. Якщо ввели якусь дурницю в URL (наприклад localhost:4200/blablabla), кидаємо на логін
  { path: '**', redirectTo: 'login' }
];