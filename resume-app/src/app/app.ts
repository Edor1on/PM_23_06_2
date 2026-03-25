import { Component, OnInit } from '@angular/core';
import { LeftColumn } from './components/left-column/left-column';
import { RightColumn } from './components/right-column/right-column';
import { ResumeService } from './services/resume'; 
import { CommonModule } from '@angular/common'; 
// ДОДАЄМО ReactiveFormsModule ДЛЯ 2-Ї ФОРМИ:
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// ІМПОРТУЄМО НАШІ НОВІ КОМПОНЕНТИ ФОРМ:
import { ContactFormComponent } from './components/contact-form/contact-form';
import { SkillFormComponent } from './components/skill-form/skill-form';

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
  // ДОДАЄМО ФОРМИ В IMPORTS:
  imports: [
    LeftColumn, 
    RightColumn, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    ContactFormComponent, 
    SkillFormComponent
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  cvData: CVData | null = null;
  errorMessage: string | null = null;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.resumeService.getResumeData().subscribe({
      next: (data) => {
        this.cvData = data;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error('Помилка завантаження:', err);
        this.errorMessage = 'Помилка: не вдалося зєднатися з сервером (Node.js). Перевірте консоль.';
      }
    });
  }

  // ... (початок файлу залишається без змін) ...

  saveChanges(): void {
    if (this.cvData) {
      this.resumeService.updateResumeData(this.cvData).subscribe({
        next: (response) => alert(response.message),
        error: (err) => this.errorMessage = 'Не вдалося зберегти зміни.'
      });
    }
  }

  // ==========================================
  // ДОДАЄМО ЦЕЙ МЕТОД СЮДИ:
  // ==========================================
  onSkillAdded(newSkill: {name: string, level: number}): void {
    if (this.cvData) {
      this.cvData.skills.push(newSkill); // Додаємо нову навичку в масив
      this.saveChanges(); // Одразу зберігаємо зміни на сервері!
    }
  }

}