import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  templateUrl: './skill-item.html',
  styleUrl: './skill-item.scss'
})
export class SkillItem {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) level!: number;
}