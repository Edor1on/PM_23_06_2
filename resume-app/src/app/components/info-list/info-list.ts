import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-list',
  standalone: true,
  templateUrl: './info-list.html',
  styleUrl: './info-list.scss'
})
export class InfoList {
  @Input() items: string[] = [];
  @Input() iconClass: string = 'bi-dot';
  @Input() twoColumns: boolean = false; // НОВЕ: За замовчуванням вимкнено
}