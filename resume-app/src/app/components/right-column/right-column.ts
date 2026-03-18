import { Component, Input } from '@angular/core';
import { CVData } from '../../app';
import { ResumeItem } from '../resume-item/resume-item';
// ДОДАЄМО НАШІ НОВІ КОМПОНЕНТИ
import { SectionHeading } from '../section-heading/section-heading';
import { SkillItem } from '../skill-item/skill-item';
import { InfoList } from '../info-list/info-list';

@Component({
  selector: 'app-right-column',
  standalone: true,
  // ОБОВ'ЯЗКОВО РЕЄСТРУЄМО ЇХ ТУТ
  imports: [ResumeItem, SectionHeading, SkillItem, InfoList], 
  templateUrl: './right-column.html',
  styleUrl: './right-column.scss'
})
export class RightColumn {
  @Input({ required: true }) cvData!: CVData;

  sectionsOpen: { [key: string]: boolean } = {
    about: false,
    experience: false,
    skills: false,
  };

  lastClickedJob: string | null = null;

  toggleSection(section: string): void {
    this.sectionsOpen[section] = !this.sectionsOpen[section];
  }

  handleJobClick(jobTitle: string) {
    this.lastClickedJob = jobTitle;
  }
}