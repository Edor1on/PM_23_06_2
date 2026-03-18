import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resume-item',
  standalone: true,
  templateUrl: './resume-item.html',
  styleUrl: './resume-item.scss'
})
export class ResumeItem {
  // Тепер він приймає прості рядки, а не специфічні об'єкти
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) date!: string;
  @Input() description?: string; // Опціональне поле (бо в освіті його нема)
  @Input() isLast: boolean = false; 

  @Output() itemClicked = new EventEmitter<string>();

  onClick() {
    this.itemClicked.emit(this.title);
  }
}