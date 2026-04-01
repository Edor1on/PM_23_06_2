import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Підключаємо роутер

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Тільки RouterModule!
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Тут більше нічого немає, вся логіка пішла в resume-page
}