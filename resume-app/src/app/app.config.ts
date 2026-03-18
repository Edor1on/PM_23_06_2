import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ДОДАТИ ЦЕ

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // ЦЕ МАЄ БУТИ ТУТ
    provideRouter(routes),
    provideHttpClient()
  ]
};