import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth'; // Зверни увагу: шлях до твого сервісу

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); 
  const router = inject(Router);           

  // Якщо користувач залогінений - пускаємо
  if (authService.isAuthenticated()) {
    return true;
  } else {
    // Якщо ні - викидаємо на сторінку логіну
    router.navigate(['/login']);
    return false;
  }
};