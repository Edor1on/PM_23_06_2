import { Component, Input } from '@angular/core';
import { CVData } from '../../app'; // Імпортуємо інтерфейс з app.ts

@Component({
  selector: 'app-left-column',
  standalone: true,
  imports: [],
  templateUrl: './left-column.html',
  styleUrl: './left-column.scss'
})
export class LeftColumn {
  // Приймаємо дані з батьківського компонента (Вимога лаби: Input)
  @Input({ required: true }) cvData!: CVData; 
}