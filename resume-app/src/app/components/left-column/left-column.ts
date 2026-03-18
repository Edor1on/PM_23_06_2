import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CVData } from '../../app'; 

// 1. ІМПОРТУЄМО НАШІ НОВІ КОМПОНЕНТИ
import { SectionHeading } from '../section-heading/section-heading';
import { InfoList } from '../info-list/info-list';
import { ResumeItem } from '../resume-item/resume-item';

@Component({
  selector: 'app-left-column',
  standalone: true,
  // 2. ДОДАЄМО ЇХ В МАСИВ IMPORTS
  imports: [SectionHeading, InfoList, ResumeItem], 
  templateUrl: './left-column.html',
  styleUrl: './left-column.scss',
  encapsulation: ViewEncapsulation.None
})
export class LeftColumn {
  @Input({ required: true }) cvData!: CVData; 
}