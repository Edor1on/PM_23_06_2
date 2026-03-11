import { Component, Input } from '@angular/core';
import { CVData } from '../../app';
import { ResumeItem } from '../resume-item/resume-item'; // Імпортуємо наш новий дочірній компонент

@Component({
  selector: 'app-right-column',
  standalone: true,
  imports: [ResumeItem], // Додаємо його сюди
  templateUrl: './right-column.html',
  styleUrl: './right-column.scss'
})
export class RightColumn {
  @Input({ required: true }) cvData!: CVData;

  // Перенесли логіку відкриття/закриття секцій сюди
  sectionsOpen: { [key: string]: boolean } = {
    about: false,
    experience: false,
    skills: false,
  };

  // Змінна для збереження даних, які прийдуть через Output
  lastClickedJob: string | null = null;

  toggleSection(section: string): void {
    this.sectionsOpen[section] = !this.sectionsOpen[section];
  }

  // Метод, який приймає дані з дочірнього компонента
  handleJobClick(jobTitle: string) {
    this.lastClickedJob = jobTitle;
  }
}