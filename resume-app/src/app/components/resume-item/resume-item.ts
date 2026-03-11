import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JobItem } from '../../app'; // Імпортуємо інтерфейс з app.ts

@Component({
  selector: 'app-resume-item',
  standalone: true,
  imports: [],
  templateUrl: './resume-item.html',
  styleUrl: './resume-item.scss'
})
export class ResumeItem {
  // 1. Приймаємо дані про конкретну роботу (Input)
  @Input({ required: true }) job!: JobItem;
  
  // 2. Приймаємо інформацію, чи це останній елемент в циклі (щоб правильно ставити відступи)
  @Input() isLast: boolean = false;

  // 3. Створюємо подію для передачі даних БАТЬКІВСЬКОМУ компоненту (Вимога лаби: Output)
  @Output() itemClicked = new EventEmitter<string>();

  // Метод, який спрацює при кліку на цю роботу
  onClick() {
    this.itemClicked.emit(this.job.title); // Відправляємо назву посади наверх
  }
}