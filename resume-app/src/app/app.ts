import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// НОВЕ: Імпортуємо наші нові компоненти (перевір, чи правильні шляхи, зазвичай вони такі)
import { LeftColumn } from './components/left-column/left-column';
import { RightColumn } from './components/right-column/right-column';

// НОВЕ: Додав слово "export" до всіх інтерфейсів, щоб ми могли їх використовувати в інших файлах
export interface Profile {
  firstName: string;
  lastName: string;
  role: string;
  profilePic: string;
  about: string;
}

export interface Contact {
  phone: string;
  website: string;
  address: string;
}

export interface EducationItem {
  university: string;
  degree: string;
  years: string;
}

export interface ReferenceItem {
  name: string;
  lines: string[];
}

export interface JobItem {
  title: string;
  company: string;
  years: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

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
  // НОВЕ: Додаємо компоненти в imports
  imports: [LeftColumn, RightColumn], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  cvData: CVData | null = null;
  errorMessage: string | null = null;

  // Цей стан ми поки залишаємо тут, але згодом перенесемо в праву колонку
  sectionsOpen: { [key: string]: boolean } = {
    about: false,
    experience: false,
    skills: false,
  };

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    try {
      const response = await fetch('data/data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.cvData = await response.json();
      this.cdr.detectChanges(); 
    } catch (error) {
      console.error('Could not load CV data:', error);
      this.errorMessage = 'Не вдалося завантажити дані резюме.';
      this.cdr.detectChanges();
    }
  }

  toggleSection(section: string): void {
    this.sectionsOpen[section] = !this.sectionsOpen[section];
  }
}