import { Component, OnInit } from '@angular/core';
import { LeftColumn } from './components/left-column/left-column';
import { RightColumn } from './components/right-column/right-column';
import { ResumeService } from './services/resume'; // Наш сервіс
import { CommonModule } from '@angular/common'; // Додав для роботи @if/@else
import { FormsModule } from '@angular/forms'; // Додаємо цей імпорт

// Інтерфейси залишаємо (хоча їх краще винести в окремий файл cv-data.model.ts, але для лаби ок)
export interface Profile { firstName: string; lastName: string; role: string; profilePic: string; about: string; }
export interface Contact { phone: string; website: string; address: string; }
export interface EducationItem { university: string; degree: string; years: string; }
export interface ReferenceItem { name: string; lines: string[]; }
export interface JobItem { title: string; company: string; years: string; description: string; }
export interface Skill { name: string; level: number; }

export interface CVData {
  profile: Profile;
  contact: Contact;
  education: EducationItem[];
  references: ReferenceItem[];
  experience: JobItem[];
  skills: Skill[];
  languages: string[];
  hobbies: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  // Додаємо FormsModule сюди, щоб запрацював [(ngModel)]
  imports: [LeftColumn, RightColumn, CommonModule, FormsModule], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App implements OnInit {
  cvData: CVData | null = null;
  errorMessage: string | null = null;

  // Інжектуємо сервіс через конструктор
  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  // Завдання 3: Виконання GET-запиту через сервіс
  loadData(): void {
    this.resumeService.getResumeData().subscribe({
      next: (data) => {
        this.cvData = data;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error('Помилка завантаження:', err);
        // Завдання 5: Обробка помилок
        this.errorMessage = 'Помилка: не вдалося зєднатися з сервером (Node.js). Перевірте консоль.';
      }
    });
  }

  // Метод для Завдання 4: Реалізація POST-запиту
  // Наприклад, додамо метод, який зможе "оновити" дані на сервері
  saveChanges(): void {
    if (this.cvData) {
      this.resumeService.updateResumeData(this.cvData).subscribe({
        next: (response) => alert(response.message),
        error: (err) => this.errorMessage = 'Не вдалося зберегти зміни.'
      });
    }
  }
}