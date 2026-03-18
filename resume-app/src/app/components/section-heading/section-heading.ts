import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss'
})
export class SectionHeading {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) iconClass!: string; 
  @Input() centered: boolean = false; // НОВЕ: Прапорець для центрування
}